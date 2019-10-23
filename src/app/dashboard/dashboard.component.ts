import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { SessionService } from '../services/session.service';
import { CookieService } from 'ngx-cookie-service';
import { LogService } from '../services/log.service';
import { VacationService } from '../services/vacation.service';
import { Vacation } from '../entities/vacation.model';
import { Router } from '@angular/router';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vacationList: Vacation[];

  constructor(private sessionService: SessionService, private logService: LogService,
              private vacationService: VacationService, private routerService: Router,
              private departmentSercie: DepartmentService) { }

  ngOnInit() {
    if (!this.sessionService.isSetUser()) {
      this.routerService.navigate(['./home']);
    } else {
      this.vacationService.addVacationOnInit(this.sessionService.getUser());
      this.vacationList = this.vacationService.getAllVacation();
    }
  }

  onClickLog(): void {
    this.logService.pushData('testString...');
    console.log(this.vacationService.getAllVacation());
    console.log(this.departmentSercie.getAllDepartments());
  }

}
