import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { LogService } from './services/log.service';
import { VacationService } from './services/vacation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent implements OnInit {
  title = 'vacationApp';

  constructor(private employeeService: EmployeeService, private vacationService: VacationService) {
  }

  ngOnInit(): void {
    this.employeeService.addEmployee('daniel', 'pass');
    this.employeeService.addEmployee('dagobert', 'pass');
    this.employeeService.addEmployee('donald', 'pass');

    this.vacationService.addVacation('test', 'heute', 'morgen');

  }
}

