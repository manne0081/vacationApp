import { Component, OnInit } from '@angular/core';
import { VacationService } from '../services/vacation.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

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

  // RadioButton-Test
  title = 'Angular 2 RC.1 - radio buttons';
  radioItems = 'one two three'.split(' ');
  model = { options: 'one' };  // Standard beim laden der Page...

  constructor(private routerService: Router, private vacationService: VacationService, private sessionService: SessionService) { }

  ngOnInit() {
    if (!this.sessionService.isSetUser()) {
      this.routerService.navigate(['./home']);
    }
    // this.userVacationClaim = this.sessionService.getUser().vacationClaim;
  }

  onClickVacation() {
    this.vacationService.addVacation(this.sessionService.getUser(), this.vacationFrom, this.vacationTo, this.isHalfDayFrom, this.isHalfDayTo);
  }

  test(): void {
    const dateFrom = new Date(this.vacationFrom);
    const dateTo = new Date(this.vacationTo);
    const milsec = dateTo.getTime() - dateFrom.getTime();
    const sec = milsec / 1000;
    const min = sec / 60;
    const std = min / 60;
    const day = std / 24;

    console.log(this.vacationFrom + ' -> this.vacationFrom');
    console.log(this.vacationTo + ' -> this.vacationTo');
    // console.log(dateFrom);
    // console.log(dateTo);

    let current_datetime = new Date();
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
    console.log(formatted_date);

    if (this.vacationFrom === undefined && this.vacationTo === undefined) {
      console.log('Beides ist undefined...');
      console.log(this.vacationFrom);
      this.vacationDays = day;
    } else if (this.vacationFrom === undefined) {
      console.log('dateFrom ist undefined');
      this.vacationDays = 1;
    } else if (this.vacationTo === undefined) {
      console.log('dateTo ist undefined');

    } else {

    }

  }

  // RadioButton-Test
  get debug() { return JSON.stringify(this.model); }

}
