import {Component, OnInit, AfterViewInit} from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../entities/employee.model';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
    private showAddEmployee = false;
    private showAddConfig = false;

    private currentUser: Employee;
    private headOfDepartment: string;

    private employeeList: Employee[] = this.employeeService.getAllEmployee();
    private headOfDepartmentSettings: string[] = ['Abteilungsleiter', 'Stellvertreter'];

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {

    }

    onClickItem(): void {
        console.log('Item clicked...');
    }

    onClickSetEmployeeToFirstHead(event: Event) {
        console.log('onClickSetEmployeeToFirstHead...');
        console.log(this.currentUser);
        console.log(this.headOfDepartment);
        console.log(event);
    }
}
