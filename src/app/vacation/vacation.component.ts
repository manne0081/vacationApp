import { Component, OnInit } from '@angular/core';
import { VacationService } from '../services/vacation.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import {isNull, isUndefined} from 'util';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
  vacationFrom: Date;
  vacationTo: Date;
  isHalfDayFrom = false;
  isHalfDayTo = false;
  userVacationClaim;
  vacationDays: number;
  restDays: number;

  // RadioButton-Test
  title = 'Angular 2 RC.1 - radio buttons';
  radioItems = 'one two three'.split(' ');
  model = { options: 'one' };  // Standard beim laden der Page...

  constructor(private routerService: Router, private vacationService: VacationService, private sessionService: SessionService) { }

  ngOnInit() {
    if (!this.sessionService.isSetUser()) {
      this.routerService.navigate(['./home']);
    }
  }

  onClickVacation() {
    this.vacationService.addVacation(this.sessionService.getUser(), this.vacationFrom.getFullYear(), this.vacationFrom, this.vacationTo, this.isHalfDayFrom, this.isHalfDayTo);
    this.userVacationClaim -= this.vacationDays;
  }

  test(): void {
    const dateFrom = new Date(this.vacationFrom);
    const dateTo = new Date(this.vacationTo);

    if (dateFrom < new Date() || dateTo < new Date()) {
      console.log('Der ausgewählte Zeitraum liegt in der Vergangenheit');
      return;
    }

    if (this.vacationFrom && this.vacationTo) {
      // the vacationTime have to be calculated
      const milsec = dateTo.getTime() - dateFrom.getTime();
      const sec = milsec / 1000;
      const min = sec / 60;
      const std = min / 60;
      const day = std / 24;
      let halfDay: number;
      if (this.isHalfDayFrom && this.isHalfDayTo) {
        halfDay = 1;
      } else if (this.isHalfDayFrom) {
        halfDay = 0.5;
      } else if (this.isHalfDayTo) {
        halfDay = 0.5;
      } else {
        halfDay = 0;
      }
      this.vacationDays = day + 1 - halfDay;
    } else if (this.vacationFrom && !this.vacationTo) {
      // it has to be taken one day
      if (!this.isHalfDayFrom) {
        this.vacationDays = 1;
      } else {
        this.vacationDays = 0.5;
      }
    } else if (isUndefined(this.vacationFrom) && isUndefined(this.vacationTo)) {
      // it has nothing to work for
      this.vacationDays = 0;
      this.restDays = 0;
    } else if (!this.vacationFrom && this.vacationTo) {
      // it has nothing to work for
      this.vacationDays = 0;
      this.restDays = 0;
    } else if (!this.vacationFrom && !this.vacationTo) {
      // it has nothing to work for
      this.vacationDays = 0;
      this.restDays = 0;
    }
    this.restDays = this.userVacationClaim - this.vacationDays;
  }

  // RadioButton-Test
  get debug() { return JSON.stringify(this.model); }

}
