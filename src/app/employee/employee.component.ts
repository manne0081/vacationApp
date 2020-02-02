import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee.model';
import {SessionService} from '../services/session.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy, AfterViewInit {
    private showAddEmployee = false;
    private showAddConfig = false;
    private isCurrentUserAdmin = false;
    private currentUser: Employee;
    private headOfDepartment: string;

    private employeeList: Employee[] = this.employeeService.getAllEmployee();
    private headOfDepartmentSettings: string[] = ['Abteilungsleiter', 'Stellvertreter'];

    constructor(private employeeService: EmployeeService, private sessionService: SessionService) {
    }

    ngOnInit() {
        if (this.sessionService.getUser().username === 'dagobert') {
            this.isCurrentUserAdmin = true;
        }
        this.sessionService.setTest(true);
    }

    ngOnDestroy(): void {
        // this.sessionService.setTest(false);
    }

    ngAfterViewInit() {

    }

    onClickItem(): void {
        console.log('Employee Item clicked...');
    }

    onClickSetEmployeeToFirstHead(event: Event) {
        console.log('onClickSetEmployeeToFirstHead...');
        console.log(this.currentUser);
        console.log(this.headOfDepartment);
        console.log(event);
    }
}
