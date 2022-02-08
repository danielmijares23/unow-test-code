import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { BreadcrumpComponent } from './breadcrump.component';
import { RouterModule } from '@angular/router';

describe('BreadcrumpComponent', () => {
  let component: BreadcrumpComponent;
  let fixture: ComponentFixture<BreadcrumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumpComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [RouterModule],
      teardown: {
        destroyAfterEach: true
      }
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
