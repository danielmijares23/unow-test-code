import { Component, Input } from '@angular/core';

export interface Paths {
  url: string;
  name: string;
  isStrong: boolean;
}

@Component({
  selector: 'app-breadcrump',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.scss']
})
export class BreadcrumpComponent {
  @Input() paths: Paths[] = [];
  constructor() { }

}
