import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { EmployeesComponent } from './employees.component';
import { BreadcrumpModule } from './../shared/components/breadcrump/breadcrump.module';
import { SearchSectionModule } from '../shared/components/search-section/search-section.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeesTableModule } from '../shared/components/employees-table/employees-table.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesDialogModule } from '../shared/components/employees-dialog/employees-dialog.module';
import { MatDialog } from "@angular/material/dialog";
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { actions } from './../shared/components/employees-table/employees-table.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let toastrService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        BrowserAnimationsModule,
        BreadcrumpModule,
        SearchSectionModule,
        FlexLayoutModule,
        EmployeesTableModule,
        RouterTestingModule,
        EmployeesDialogModule
      ],
      teardown: {
        destroyAfterEach: true
      },
      providers: [
        {
          provide: MatDialog,
          useValue: {
            open: () => ({
              beforeClosed: () => of({ action: 'add' })
            })
          }
        },
        { provide: ToastrService, useValue: { success: () => new Function } }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getSearch test suite', () => {
    it('should call method getSearch correctly', () => {
      component.getSearch('testing');
      expect(component.search).toEqual('testing');
    });
  });

  describe('getActionsEvent test suite', () => {
    it('should call method getActionsEvent correctly', () => {
      spyOn(component, "removeEmployee").and.callThrough();
      spyOn(toastrService, 'success').and.callThrough();
      component.getActionsEvent({ action: 'remove', employe: { firstName: 'daniel', lastName: 'mijares', job: 'full-stack developer', birthDate: '2022/02/08' }, index: 0 });
      expect(component.removeEmployee).toHaveBeenCalled();
    });

    it('should call enter case remove correctly', () => {
      spyOn(component, "openDialog").and.callThrough();
      component.getActionsEvent({ action: 'edit', employe: { firstName: 'daniel', lastName: 'mijares', job: 'full-stack developer', birthDate: '2022/02/08' }, index: 0 });
      expect(component.openDialog).toHaveBeenCalled();
    });
  });

  describe('openDialog method test suite', () => {
    it('should call method openDialog correctly', () => {
      const matDialog: MatDialog = TestBed.inject(MatDialog);
      spyOn(matDialog, "open").and.callThrough();
      component.openDialog({ action: 'add' });
      expect(matDialog.open).toHaveBeenCalled();
    });
  });

  describe('addOrUpdateEmployees  method test suite', () => {
    it('should enter case add correctly', () => {
      const mockedData: actions = { action: 'add', employe: { firstName: 'Daniel', lastName: 'Mijares', job: 'full-stack developer', birthDate: '2022/02/08' } };
      spyOn(component, "addOrEditMessage").and.callThrough();
      component.addOrUpdateEmployees(mockedData);
      expect(component.addOrEditMessage).toHaveBeenCalled();
    });

    it('should call enter case edit when case first element', () => {
      const mockedData: actions = { action: 'edit', employe: { firstName: 'Daniel', lastName: 'Mijares', job: 'full-stack developer', birthDate: '2022/02/08' }, index: 0 };
      spyOn(component, "addOrEditMessage").and.callThrough();
      component.addOrUpdateEmployees(mockedData);
      expect(component.addOrEditMessage).toHaveBeenCalled();
    });

    it('should call enter case edit when case other element distinct first', () => {
      const mockedData: actions = { action: 'edit', employe: { firstName: 'Daniel', lastName: 'Mijares', job: 'full-stack developer', birthDate: '2022/02/08' }, index: 1 };
      spyOn(component, "addOrEditMessage").and.callThrough();
      component.addOrUpdateEmployees(mockedData);
      expect(component.addOrEditMessage).toHaveBeenCalled();
    });
  });

  describe('removeEmployee test suite', () => {
    it('should call method correctly', () => {
      spyOn(toastrService, 'success').and.callThrough();
      component.employees = [{ firstName: 'Daniel', lastName: 'Mijares', job: 'full-stack developer', birthDate: '2022/02/08' }];
      component.removeEmployee(0);
      expect(component.employees.length).toEqual(0)
      expect(toastrService.success).toHaveBeenCalled();
    });
  });

  describe('addOrEditMessage test suite', () => {
    it('should call method addOrEditMessage correctly', () => {
      spyOn(toastrService, 'success').and.callThrough();
      component.addOrEditMessage({ action: 'add', employe: { firstName: 'Daniel', lastName: 'Mijares', job: 'full-stack developer', birthDate: '2022/02/08' } });
      expect(toastrService.success).toHaveBeenCalled();
    });
  });


});
