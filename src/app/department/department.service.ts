import {Department} from './department.model';
import {Injectable} from '@angular/core';
import {Employee} from '../employee/employee.model';

@Injectable()
export class DepartmentService {
    private departmentNumber = 100;

    private departmentList: Department[] = [
        new Department(
            this.createDepartmentNumber(0),
            'Einkauf'),
        new Department(
            this.createDepartmentNumber(1),
            'Verkauf'),
        new Department(
            this.createDepartmentNumber(2),
            'Planung'),
    ];

    constructor() {
        this.addDepartment(3, 'Versand');
    }

    addDepartment(departmentNumber: number, name: string) {
        this.departmentList.push(new Department(this.createDepartmentNumber(departmentNumber), name));
    }

    createDepartmentNumber(m: number): number {
        const n = this.departmentNumber + m;
        return n;
    }

    getAllDepartments() {
        return this.departmentList;
    }

    getDepartmentById(id: number): Department {
        return this.departmentList.find(department => department.id === id);
    }

    // find department by id (in two functions)
    getDepartment(): Department {
        return this.departmentList.find(this.findDepartment);
    }

    findDepartment(department) {
        return department.id === 1;
    }

}
