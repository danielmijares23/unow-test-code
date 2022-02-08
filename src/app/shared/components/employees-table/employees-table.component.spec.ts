import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { EmployeesTableComponent } from './employees-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EmployeesTableComponent', () => {
  let component: EmployeesTableComponent;
  let fixture: ComponentFixture<EmployeesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesTableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatMenuModule,
        BrowserAnimationsModule
      ],
      teardown: {
        destroyAfterEach: true
      }
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
