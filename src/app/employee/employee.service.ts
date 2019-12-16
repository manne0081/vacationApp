import {Employee} from './employee.model';
import {Department} from '../department/department.model';
import {DepartmentService} from '../department/department.service';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    private employeeList: Employee[] = [];
    private employeeNumber = 10000;

    showAddEmployee = false;
    private test = 'testString';

    constructor(private departmentService: DepartmentService) {
    }

    addEmployeeOnInit(): void {
        let n = this.employeeNumber + this.employeeList.length + 1;
        this.addEmployee('Daniel', 'Düsentrieb', 'daniel', 'pass', n, this.departmentService.getDepartmentById(0));
        n++;
        this.addEmployee('Dagobert', 'Duck', 'dagobert', 'pass', n, this.departmentService.getDepartmentById(1));
        n++;
        this.addEmployee('Donald', 'Duck', 'donald', 'pass', n, this.departmentService.getDepartmentById(2));
    }

    addEmployee(nameI: string, nameII: string, username: string, password: string, employeeNumber: number, department: Department) {
        this.employeeList.push(new Employee(nameI, nameII, username, password, employeeNumber, department));
    }

    getAllEmployee() {
        return this.employeeList;
    }

    getEmployeeById(id: number): Employee {
        return this.employeeList.find(employee => employee.id === id);
    }

    getTest(): string {
        return this.test;
    }

    setTest(value: string) {
        this.test = value;
    }
}
