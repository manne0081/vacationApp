import { EventEmitter, Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable()
export class LogService {
  pushedData = new EventEmitter<string>();

  constructor(private employeeService: EmployeeService) { }

  log(message: string) {
    console.log(message);
  }

  pushData(value: string) {
    this.log(value);
    this.pushedData.emit(value);
    let test = '';

    for (const entrie of this.employeeService.getAllEmployee()) {
      test += entrie.username + ' ';
    }

    this.pushedData.emit(test);
  }
}
