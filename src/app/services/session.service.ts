import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {LogService} from './log.service';
import {EmployeeService} from '../employee/employee.service';
import {Employee} from '../employee/employee.model';

@Injectable()
export class SessionService {
    private currentUser: Employee;
    private isSetCurrentUser = false;
    private isSetTest: boolean;

    constructor(private cookieService: CookieService, private logService: LogService,
                private employeeService: EmployeeService) {
    }

    setUser(user: string): void {
        for (const employee of this.employeeService.getAllEmployee()) {
            if (employee.username === user) {
                this.currentUser = employee;
                this.isSetCurrentUser = true;
            }
        }
    }

    getUser(): Employee {
        return this.currentUser;
    }

    isSetUser(): boolean {
        return this.isSetCurrentUser;
    }

    getTest() {
        return this.isSetTest;
    }

    setTest(test: boolean) {
        this.isSetTest = test;
    }
}
