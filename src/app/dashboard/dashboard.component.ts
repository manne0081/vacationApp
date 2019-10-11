import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie-service';
import { LogService } from '../services/log.service';
import { VacationService } from '../services/vacation.service';
import { Vacation } from '../entities/vacation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vacationList: Vacation[];
  vacation: Vacation;

  constructor(private cookieService: CookieService, private sessionService: SessionService,
              private employeeService: EmployeeService, private logService: LogService,
              private vacationService: VacationService, private routerService: Router) { }

  ngOnInit() {
    if (!this.cookieService.check('rmbLogin') && !this.cookieService.check('session')) {
      this.routerService.navigate(['./home']);
    } else {
      console.log(this.sessionService.getUser());
      this.vacationList = this.vacationService.getVacation();
    }
  }

  onClick(): void {
    this.logService.pushData('testString...');
    console.log(this.employeeService.getEmployee());
    console.log(this.vacationService.getVacation());
  }

}
