import { Component, OnInit } from '@angular/core';
import {Department} from './department.model';
import {DepartmentService} from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  private departmentList: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentList = this.departmentService.getAllDepartments();
  }
}
