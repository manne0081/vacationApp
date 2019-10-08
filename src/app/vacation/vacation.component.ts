import { Component, OnInit } from '@angular/core';
import { VacationService } from '../services/vacation.service';
import { SessionService } from '../services/session.service';

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

  constructor(private vacationService: VacationService, private sessionService: SessionService) { }

  ngOnInit() {
  }

  onClickVacation() {
    this.vacationService.addVacation(this.sessionService.getUser(), this.vacationFrom, this.vacationTo, this.isHalfDayFrom, this.isHalfDayTo);
    console.log(this.vacationFrom + ' >> halfDay: ' + this.isHalfDayFrom + '  >  ' + this.vacationTo + ' >> halfDay: ' + this.isHalfDayTo);
  }

}
