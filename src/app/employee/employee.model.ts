import {Department} from '../department/department.model';

export class Employee {
    private nameI: string;
    private nameII: string;
    private username: string;
    private password: string;
    private employeeNumber: number;
    private department: Department;

    constructor(nameI: string, nameII: string, username: string, password: string, employeeNumber: number, department: Department) {
        this.nameI = nameI;
        this.nameII = nameII;
        this.username = username;
        this.password = password;
        this.employeeNumber = employeeNumber;
        this.department = department;
    }

}
