import {Employee} from '../employee/employee.model';

export class Department {
    id: number;
    name: string;
    description: string;
    firstHead: Employee;
    secondHead: Employee;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

}
