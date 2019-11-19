import { Department } from '../department/department.model';

export class DepartmentService {
  private departmentList: Department[] = [];

  addDepartmentOnInit(): void {
    this.addDepartment('Verkauf', '');
    this.addDepartment('Einkauf', '');
    this.addDepartment('Druckerei', '');
  }

  addDepartment(name: string, description: string) {
    this.departmentList.push(new Department(name, description));
  }

  getAllDepartments() {
    return this.departmentList;
  }

}
