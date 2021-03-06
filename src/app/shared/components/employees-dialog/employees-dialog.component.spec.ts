import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { EmployeesDialogComponent } from './employees-dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeesService } from './../../services/employees/employees.service';
import { of } from 'rxjs';

describe('EmployeesDialogComponent', () => {
  let component: EmployeesDialogComponent;
  let fixture: ComponentFixture<EmployeesDialogComponent>;
  let employeesService: EmployeesService;
  let toastrService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesDialogComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatProgressBarModule,
        HttpClientTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      teardown: {
        destroyAfterEach: true
      },
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {
            action: "edit",
            employe: {
              firstName: "Daniel",
              lastName: "Mijares",
              job: "Frontend Developer",
              birthDate: "1987/11/23"
            },
            index: 0
          }
        },
        { provide: ToastrService, useValue: { error: () => new Function } },
        {
          provide: EmployeesService,
          useValue: {
            getEmployeesPositions: () => Promise.resolve({ positions: ["full-stack developer"] })
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDialogComponent);
    employeesService = TestBed.inject(EmployeesService);
    toastrService = TestBed.inject(ToastrService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit method test suite', () => {
    it('should call method getPositions correctly', () => {
      spyOn(component, 'getPositions').and.callThrough().and.stub();
      component.ngOnInit();
      expect(component.getPositions).toHaveBeenCalled();
    });
  });

  describe('getPositions test suite', () => {
    it('should call method getPositions correctly', async () => {
      spyOn(employeesService, 'getEmployeesPositions').and.returnValue(Promise.resolve({
        positions: ['full-stack developer']
      }));
      spyOn(component.form, 'setValue').and.callThrough();
      component.getPositions();
      fixture.whenStable().then(() => {
        expect(component.positions.length).toBe(1);
        expect(component.form.setValue).toHaveBeenCalled();
        expect(component.flagLoading).toBe(false);
      });
    });
  });

  it('should call method getPositions catch error', async () => {
    spyOn(toastrService, 'error').and.callThrough();
    spyOn(employeesService, 'getEmployeesPositions').and.returnValue(Promise.reject('cant load position list'));
    component.getPositions();
    fixture.whenStable().then(() => {
      expect(component.flagLoading).toBe(false);
      expect(toastrService.error).toHaveBeenCalled();
    });
  });
});
