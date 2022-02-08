import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { employees } from './../../models/employees.model';

export interface actions {
  action: 'add' | 'edit' | 'remove';
  employe?: employees,
  index?: number
};

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})

export class EmployeesTableComponent implements OnChanges {
  @Input() resource: employees[];
  @Input() search: string;
  @Output() sendActionsEvent = new EventEmitter<actions>();
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "number",
    "firstName",
    "lastName",
    "job",
    "birthDate",
    "actions"
  ];

  constructor() { }

  ngOnChanges(): void {
    this.dataSource.data = this.resource;
    this.dataSource.filter = this.search?.trim().toLowerCase();
  }

  eventEmployees(event: actions) {
    this.sendActionsEvent.emit(event);
  }

}
