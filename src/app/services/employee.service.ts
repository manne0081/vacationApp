import { Employee } from '../entities/employee.model';

export class EmployeeService {
  private employeeList: Employee[] = [];

  addEmployeeOnInit(): void {
    this.addEmployee('daniel', 'pass');
    this.addEmployee('dagobert', 'pass');
    this.addEmployee('donald', 'pass');
  }

  addEmployee(username: string, password: string) {
    this.employeeList.push(new Employee(username, password));
  }

  getEmployee() {
    return this.employeeList;
  }

}
