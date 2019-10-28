import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  private nameI;
  private nameII;
  private username;
  private password;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.password = 'test1234';
  }

  onClickSave(): void {
    // let n = this.employeeService.getAllEmployee().pop().employeeNumber;  //Entfernt den letzten Eintrag im Array...
    let n = this.employeeService.getAllEmployee()[this.employeeService.getAllEmployee().length - 1].employeeNumber;
    n++;
    this.employeeService.addEmployee(this.nameI, this.nameII, this.username, this.password, n);
    this.nameI = '';
    this.nameII = '';
    this.username = '';
    this.password = '';
  }
}
