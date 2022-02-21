import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { actions } from './../employees-table/employees-table.component';
import { EmployeesService } from './../../services/employees/employees.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees-dialog',
  templateUrl: './employees-dialog.component.html',
  styleUrls: ['./employees-dialog.component.scss']
})
export class EmployeesDialogComponent implements OnInit {
  flagLoading = true;
  form = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    job: new FormControl(null, Validators.required),
    birthDate: new FormControl(null, Validators.required)
  })
  positions: string[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: actions,
    private readonly employeesService: EmployeesService,
    private readonly toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getPositions();
  }

  getPositions(): void {
    this.employeesService.getEmployeesPositions().then(response => {
      this.positions = response.positions;
      if (this.data?.employe) {
        this.form.setValue(this.data.employe);
      }
      this.flagLoading = false;
    }).catch(err => {
      this.flagLoading = false;
      this.toastrService.error('No fue posible cargar la lista de cargos')
      console.warn(`cant get positions employees`, err);
    });
  }

}
