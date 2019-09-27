import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
  private employeeList: string[] = [];

  constructor() { }

  addData(data: string) {
    this.employeeList.push(data);

  }

  getData() {
    return this.employeeList;
  }

}
