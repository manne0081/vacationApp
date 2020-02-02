import {Employee} from './employee.model';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    private employeeNumber = 10000;
    private test = 'testString';
    showAddEmployee = false;

    private employeeList: Employee[] = [
        new Employee('Dagobert',
                     'Duck',
                     'dagobert',
                     'pass',
                      this.createEmployeeNumber(1)),
        new Employee('Donald',
                     'Duck',
                     'donald',
                     'pass',
                      this.createEmployeeNumber(2)),
        new Employee('Daniel',
                     'Düsentrieb',
                     'daniel',
                     'pass',
                      this.createEmployeeNumber(3))
    ];

    constructor() {
    }

    createEmployeeNumber(m: number): number {
        const n = this.employeeNumber + m;
        return n;
    }

    addEmployee(nameI: string, nameII: string, username: string, password: string, employeeNumber: number) {
        this.employeeList.push(new Employee(nameI, nameII, username, password, employeeNumber));
    }

    getAllEmployee() {
        return this.employeeList;
    }

    private getEmployeeNumber(): number {
        return this.employeeList.length + 1;
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
