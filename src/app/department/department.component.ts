import {Component, OnInit} from '@angular/core';
import {Department} from './department.model';
import {DepartmentService} from './department.service';
import {SessionService} from '../services/session.service';
import {Employee} from '../employee/employee.model';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
    private departmentList: Department[] = [];
    private isCurrentUserAdmin = false;

    constructor(private departmentService: DepartmentService, private sessionService: SessionService) {
    }

    ngOnInit() {
        if (this.sessionService.getUser().username === 'dagobert') {
            this.isCurrentUserAdmin = true;
        }
        this.departmentList = this.departmentService.getAllDepartments();
    }

    onClickItem() {
        console.log('Department Item clicked...');
    }

    setDepartmentEmployee() {
        let department = this.departmentService.getDepartmentById(101);
        console.log(department);
    }

    getAllDepartments() {
        return this.departmentList;
    }

}
