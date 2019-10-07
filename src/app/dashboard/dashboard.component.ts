import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie-service';
import { LogService } from '../services/log.service';
import {VacationService} from '../services/vacation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {
  vacationSum: number;
  vacation1: number;
  vacation2: number;
  vacation3: number;
  vacationList = this.vacationService.getVacation();

  constructor(private cookieService: CookieService, private sessionService: SessionService, private employeeService: EmployeeService,
              private logService: LogService, private vacationService: VacationService) { }

  ngOnInit() {
    this.vacationSum = 30;
    this.vacation1 = 15;
    this.vacation2 = 5;
    this.vacation3 = 25;
  }

  onClick(): void {
    this.logService.pushData('testString...');
    console.log(this.employeeService.getEmployee());
    console.log(this.vacationService.getVacation());
  }



}
