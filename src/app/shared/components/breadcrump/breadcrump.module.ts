import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumpComponent } from './breadcrump.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    BreadcrumpComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumpComponent
  ]
})
export class BreadcrumpModule { }
