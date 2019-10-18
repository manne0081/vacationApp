import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { LogService } from './services/log.service';
import { SessionService } from './services/session.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { VacationService } from './services/vacation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent implements OnInit {

  constructor(private routerService: Router, private cookieService: CookieService, private sessionService: SessionService,
              private employeeService: EmployeeService, private vacationService: VacationService) {
  }

  ngOnInit(): void {
    if (!this.sessionService.isSetUser()) {
      this.routerService.navigate(['./home']);
    }
    this.employeeService.addEmployeeOnInit();
  }
}

