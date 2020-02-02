import {Employee} from '../employee/employee.model';

export class Department {
    id: number;
    departmentNumber: number;
    name: string;
    departmentEmployee: Employee[];
    firstHead: Employee;
    secondHead: Employee;

    constructor(departmentNumber: number, name: string) {
        this.departmentNumber = departmentNumber;
        this.name = name;
    }
}
