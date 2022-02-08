import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { positions } from '../../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private readonly http: HttpClient) { }

  getEmployeesPositions(): Promise<positions> {
    return this.http.get<positions>(`https://ibillboard.com/api/positions`).toPromise();
  }
}
