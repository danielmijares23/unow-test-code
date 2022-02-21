import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('EmployeesService', () => {
  let service: EmployeesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmployeesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEmployeesPositions test suite', () => {
    it('should call method getEmployeesPositions correctly', () => {
      service.getEmployeesPositions().then();
      httpMock.expectOne(request => (
        request.method === 'GET' &&
        request.urlWithParams === `https://ibillboard.com/api/positions`
      ));
      expect(service.getEmployeesPositions).toBeTruthy();
    });
  });
});
