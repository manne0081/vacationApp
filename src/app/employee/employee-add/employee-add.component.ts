import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {SessionService} from '../../services/session.service';

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

    private successfullyCreated = false;
    private isCurrentUserAdmin = false;

    constructor(private employeeService: EmployeeService, private sessionService: SessionService) {
    }

    ngOnInit() {
        this.password = 'test1234';
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
        this.employeeService.addEmployee(this.nameI, this.nameII, this.username, this.password, n);

        // create vacationClaim record


        // delete fields after objects created
        // this.nameI = '';
        // this.nameII = '';
        // this.username = '';
        // this.password = '';

        this.successfullyCreated = true;
    }
}
