import {Department} from '../department/department.model';

export class Employee {
    id: number;
    personalNumber: number;
    nameI: string;
    nameII: string;
    username: string;
    password: string;
    employeeNumber: number;
    department: Department;

    constructor(nameI: string, nameII: string, username: string, password: string, employeeNumber: number, department: Department) {
        this.nameI = nameI;
        this.nameII = nameII;
        this.username = username;
        this.password = password;
        this.employeeNumber = employeeNumber;
        this.department = department;
    }
}
