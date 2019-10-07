import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LogService } from './log.service';
import { EmployeeService } from './employee.service';
import { Employee } from '../entities/employee.model';

@Injectable()

export class SessionService {
  private currentUser: Employee;

  constructor(private cookieService: CookieService, private logService: LogService,
              private employeeService: EmployeeService) {}

  setUser(user: string): void {
    for (const employee of this.employeeService.getEmployee()) {
      if (employee.username === user) {
        this.currentUser = employee;
      }
    }
  }

  getUser(): Employee {
    return this.currentUser;
  }
}
