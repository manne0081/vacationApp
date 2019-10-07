import { Component, OnInit } from '@angular/core';
import {VacationService} from '../services/vacation.service';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {

  constructor(private vacationService: VacationService, private sessionService: SessionService) { }

  ngOnInit() {
  }

  onClickVacation() {
    this.vacationService.addVacation(this.sessionService.getUser(), 'test', 'test');
  }

}
