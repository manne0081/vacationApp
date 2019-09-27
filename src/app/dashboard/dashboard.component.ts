import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.vacationSum = 30;
    this.vacation1 = 15;
    this.vacation2 = 5;
    this.vacation3 = 25;
  }

  onClick(): void {
    console.log('dashboard onClick: ' + this.employeeService.getData());
  }

}
