import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesDialogComponent } from './employees-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    EmployeesDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatProgressBarModule
  ],
  exports: [EmployeesDialogComponent],
  entryComponents: [EmployeesDialogComponent]
})
export class EmployeesDialogModule { }
