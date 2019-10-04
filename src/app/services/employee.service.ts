import { Employee } from '../entities/employee.model';

export class EmployeeService {
  private employeeList: Employee[] = [];

  addEmployee(username: string, password: string) {
    this.employeeList.push(new Employee(username, password));
  }

  getEmployee() {
    return this.employeeList;
  }

}
