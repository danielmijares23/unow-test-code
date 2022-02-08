import { Component } from '@angular/core';
import { Paths } from '../shared/components/breadcrump/breadcrump.component';
import { employees } from './../shared/models/employees.model';
import { actions } from './../shared/components/employees-table/employees-table.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesDialogComponent } from './../shared/components/employees-dialog/employees-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  paths: Paths[] = [{ url: '/', name: 'Empleados', isStrong: true }];
  employees: employees[] = [];
  search: string;
  constructor(
    private readonly toastrService: ToastrService,
    private readonly dialog: MatDialog
  ) { }

  getSearch(event: string): void {
    this.search = event;
  }

  getActionsEvent(event: actions): void {
    if (event.action !== 'remove') {
      this.openDialog(event);
    } else if (event?.index === 0 || event.index) {
      this.removeEmployee(event.index);
    }
  }

  openDialog(event: actions): void {
    const dialogRef = this.dialog.open(EmployeesDialogComponent, {
      data: event,
      width: '500px'
    });
    dialogRef.beforeClosed().subscribe((event: actions) => {
      this.addOrUpdateEmployees(event);
    });
  }

  addOrUpdateEmployees(event: actions): void {
    if (event?.action === 'add' && event?.employe) {
      this.employees = [... this.employees, event.employe];
      this.addOrEditMessage(event);
    } else if (event?.action === 'edit' && event?.employe && event?.index === 0) {
      this.employees[event.index] = event.employe;
      this.employees = [... this.employees];
      this.addOrEditMessage(event);
    } else if (event?.action === 'edit' && event?.employe && event?.index) {
      this.employees[event.index] = event.employe;
      this.employees = [... this.employees];
      this.addOrEditMessage(event);
    }
  }

  removeEmployee(index: number): void {
    this.employees.splice(index, 1);
    this.employees = [... this.employees];
    this.toastrService.success(`Empleado eliminado`);
  }

  addOrEditMessage(event: actions): void {
    this.toastrService.success(`Se ${event?.action === 'add' ? 'agrego un nuevo' : 'edito el'}  empleado`);
  }

}
