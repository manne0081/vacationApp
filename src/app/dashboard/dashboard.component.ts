import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { TestService } from '../services/test.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: []
})
export class DashboardComponent implements OnInit {
  vacationSum: number;
  vacation1: number;
  vacation2: number;
  vacation3: number;

  constructor(private employeeService: EmployeeService,
              private testService: TestService) { }

  ngOnInit() {
    this.vacationSum = 30;
    this.vacation1 = 15;
    this.vacation2 = 5;
    this.vacation3 = 25;
  }

  onClick(): void {
    console.log('dashboard onClick: ' + this.employeeService.getData());
    console.log(';-) ' + this.testService.getTest());
  }

  

}
