import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit, OnDestroy {
  search = new FormControl();
  sub: Subscription;
  @Output() sendSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.sub = this.search.valueChanges.pipe(
      //  espera 1000 ms después de cada pulsación de tecla antes de considerar el término
      debounceTime(1000),

      // ignorar nuevo término si es igual al término anterior
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.sendSearch.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
