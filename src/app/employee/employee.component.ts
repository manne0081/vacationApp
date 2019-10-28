import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee} from '../entities/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  private showAddEmployee = false;

  private employeeList: Employee[] = this.employeeService.getAllEmployee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onClickItem(): void {
    console.log('Item clicked...');
  }
}
