import { Employee } from './employee.model';
import {Department} from '../department/department.model';

export class EmployeeService {
  private employeeList: Employee[] = [];
  private employeeNumber = 10000;

  showAddEmployee = false;
  private test = 'testString';

  addEmployeeOnInit(): void {
    let n = this.employeeNumber + this.employeeList.length + 1;
    this.addEmployee('Daniel', 'Düsentrieb', 'daniel', 'pass', n);
    n++;
    this.addEmployee('Dagobert', 'Duck', 'dagobert', 'pass', n);
    n++;
    this.addEmployee('Donald', 'Duck', 'donald', 'pass', n);
  }

  addEmployee(nameI: string, nameII: string, username: string, password: string, employeeNumber: number, department: Department) {
    this.employeeList.push(new Employee(nameI, nameII, username, password, employeeNumber, department));
  }

  getAllEmployee() {
    return this.employeeList;
  }

  getTest(): string {
    return this.test;
  }

  setTest(value: string) {
    this.test = value;
  }
}