import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  private nameI: string;
  private nameII: string;
  private username: string;
  private password: string;
  private vacationClaim: number;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onClickSave(): void {
    let bool: boolean;

    if (isUndefined(this.nameI)) {
      bool = true;
    }
    if (isUndefined(this.nameII)) {
      bool = true;
    }

    if (!bool) {
    this.employeeService.addEmployee(this.nameI, this.nameII, this.username, this.password, this.vacationClaim);
    console.log(this.nameI + ' ' + this.nameII + ' ' + this.username + ' ' + this.password + ' ' + this.vacationClaim);
    } else {
      console.log('fehler...');
    }
  }

}
