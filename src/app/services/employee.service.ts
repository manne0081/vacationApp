import { Employee } from '../entities/employee.model';

export class EmployeeService {
  private employeeList: Employee[] = [];

  addEmployeeOnInit(): void {
    this.addEmployee('daniel', 'pass', 24);
    this.addEmployee('dagobert', 'pass', 26);
    this.addEmployee('donald', 'pass', 30);
  }

  addEmployee(username: string, password: string, vacationClaim: number) {
    this.employeeList.push(new Employee(username, password, vacationClaim));
  }

  getAllEmployee() {
    return this.employeeList;
  }

}
