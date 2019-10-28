import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
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
  vacationList: Vacation[] = this.vacationService.getAllVacation();
  private isCurrentUserAdmin = false;

  constructor(private sessionService: SessionService, private logService: LogService,
              private vacationService: VacationService, private routerService: Router) { }

  ngOnInit() {
    if (!this.sessionService.isSetUser()) {
      this.routerService.navigate(['./home']);
    } else {
      if (this.sessionService.getUser().username === 'dagobert') {
        this.isCurrentUserAdmin = true;
      }
      this.vacationService.addVacationOnInit(this.sessionService.getUser());
    }
  }
}
