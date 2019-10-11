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
    if (this.cookieService.check('rmbLogin')) {
      console.log('cookie "rmbLogin ist gesetzt...');
      console.log(this.cookieService.get('rmbLogin'));
      this.sessionService.setUser(this.cookieService.get('rmbLogin'));
      console.log(this.sessionService.getUser());
    } else if (this.cookieService.check('session')) {
      console.log('cookie "session ist gesetzt...');
      console.log(this.cookieService.get('session'));
      this.sessionService.setUser(this.cookieService.get('session'));
      console.log(this.sessionService.getUser());
    }
    this.employeeService.addEmployeeOnInit();
    this.vacationService.addVacationOnInit(this.sessionService.getUser());
  }
}

