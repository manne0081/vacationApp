import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { LogService } from './services/log.service';
import { VacationService } from './services/vacation.service';
import { SessionService } from './services/session.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent implements OnInit {

  constructor(private cookieService: CookieService, private sessionService: SessionService,
              private employeeService: EmployeeService, private vacationService: VacationService) {
  }

  ngOnInit(): void {
    const cookieUser = this.cookieService.get('rmbLogin');

    this.employeeService.addEmployeeOnInit();
    this.sessionService.setUser(cookieUser);
    this.vacationService.addVacationOnInit(this.sessionService.getUser());

  }
}

