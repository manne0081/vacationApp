import {Department} from './department.model';
import {Injectable} from '@angular/core';
import {Employee} from '../employee/employee.model';
import {EmployeeService} from '../employee/employee.service';

@Injectable()
export class DepartmentService {
    private departmentList: Department[] = [];

    constructor() {
    }

    addDepartmentOnInit(): void {
        // this.addDepartment(0, 'Verkauf', '', this.employeeService.getEmployeeById(0));
        // this.addDepartment(1, 'Einkauf', '', this.employeeService.getEmployeeById(1));
        // this.addDepartment(2, 'Druckerei', '', this.employeeService.getEmployeeById(2));
        this.addDepartment(0, 'Verkauf', '');
        this.addDepartment(1, 'Einkauf', '');
        this.addDepartment(2, 'Druckerei', '');
    }

    addDepartment(id: number, name: string, description: string) {
        this.departmentList.push(new Department(id, name, description));
    }

    getAllDepartments() {
        return this.departmentList;
    }

    // find department by id (in one function)
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
