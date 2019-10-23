import { Employee } from '../entities/employee.model';

export class EmployeeService {
  private employeeList: Employee[] = [];

  addEmployeeOnInit(): void {
    this.addEmployee('Daniel', 'Düsentrieb', 'daniel', 'pass', 24);
    this.addEmployee('Dagobert', 'Duck', 'dagobert', 'pass', 26);
    this.addEmployee('Donald', 'Duck', 'donald', 'pass', 30);
  }

  addEmployee(nameI: string, nameII: string, username: string, password: string, vacationClaim: number) {
    this.employeeList.push(new Employee(nameI, nameII, username, password, vacationClaim));
  }

  getAllEmployee() {
    return this.employeeList;
  }

}
