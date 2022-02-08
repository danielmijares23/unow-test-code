import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesTableComponent } from './employees-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    EmployeesTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule
  ],
  exports: [EmployeesTableComponent]
})
export class EmployeesTableModule { }
