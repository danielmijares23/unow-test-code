import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { SearchSectionComponent } from './search-section.component';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSectionComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      teardown: {
        destroyAfterEach: true
      }
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
