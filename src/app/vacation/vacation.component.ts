import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    console.log(this.sessionService.getUser());
  }

}
