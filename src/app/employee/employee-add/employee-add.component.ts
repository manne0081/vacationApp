import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {SessionService} from '../../services/session.service';
import {Department} from '../../department/department.model';
import {DepartmentService} from '../../department/department.service';

@Component({
    selector: 'app-employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
    private username;
    private password;
    private nameI;
    private nameII;
    private street;
    private houseNumber;
    private plz;
    private place;
    private vacationClaim;
    private vacationClaimFirstYear;
    private isCurrentUserAdmin = false;
    private successfullyCreated = false;

    private department: Department;
    private departments: Department[];
    private deptTypes: string[] = ['Mitarbeiter', 'Abteilungsleiter', 'Stellv. Abteilungsleiter'];

    constructor(private employeeService: EmployeeService, private sessionService: SessionService,
                private departmentService: DepartmentService) {
    }

    ngOnInit() {
        this.password = 'test1234';
        this.departments = this.departmentService.getAllDepartments();
        if (this.sessionService.getUser().username === 'dagobert') {
            this.isCurrentUserAdmin = true;
        }
    }

    onClickSave(): void {
        // check mandatory fields
        if (!this.username) {
            window.alert('Nicht alle Pflichtfelder gefüllt...');
            return;
        }

        // create employee
        // let n = this.employeeService.getAllEmployee().pop().employeeNumber;  //Entfernt den letzten Eintrag im Array...
        let n = this.employeeService.getAllEmployee()[this.employeeService.getAllEmployee().length - 1].employeeNumber;
        n++;
        this.employeeService.addEmployee(this.nameI, this.nameII, this.username, this.password, n, this.departmentService.getDepartmentByShortHand(1));

        // if an employee is first- or secondHead, set this to the department record


        // console.log(this.department);
        this.successfullyCreated = true;
    }
}
