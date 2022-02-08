import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeesRoutingModule } from './employees-routing.module';
import { BreadcrumpModule } from './../shared/components/breadcrump/breadcrump.module';
import { SearchSectionModule } from '../shared/components/search-section/search-section.module';
import { EmployeesTableModule } from '../shared/components/employees-table/employees-table.module';
import { EmployeesDialogModule } from '../shared/components/employees-dialog/employees-dialog.module';
@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    BreadcrumpModule,
    SearchSectionModule,
    FlexLayoutModule,
    EmployeesTableModule,
    EmployeesDialogModule
  ]
})
export class EmployeesModule { }
