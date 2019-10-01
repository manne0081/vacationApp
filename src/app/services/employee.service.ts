import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
  private employeeList: string[] = [];
  private testList: Employee[] = [];

  constructor() { }

  addData(data: string) {
    this.employeeList.push(data);
    // this.testList.push(new Employee('test', 'test'));
  }

  getData() {
    return this.employeeList;
  }

}
