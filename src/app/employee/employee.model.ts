import {Department} from '../department/department.model';

export class Employee {
    id: number;
    employeeNumber: number;
    nameI: string;
    nameII: string;
    username: string;
    password: string;

    constructor(nameI: string, nameII: string, username: string, password: string, employeeNumber: number) {
        this.nameI = nameI;
        this.nameII = nameII;
        this.username = username;
        this.password = password;
        this.employeeNumber = employeeNumber;
    }
}
