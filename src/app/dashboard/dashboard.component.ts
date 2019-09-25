import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vacationSum: number;
  vacation1: number;
  vacation2: number;
  vacation3: number;

  constructor() { }

  ngOnInit() {
    this.vacationSum = 30;
    this.vacation1 = 15;
    this.vacation2 = 5;
    this.vacation3 = 25;
  }

}
