import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'vacationApp';

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.addData('daniel');
    this.employeeService.addData('donald');
    this.employeeService.addData('dagobert');
  }
}
