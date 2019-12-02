import { Department } from './department.model';

export class DepartmentService {
  private departmentList: Department[] = [];

  addDepartmentOnInit(): void {
    this.addDepartment(0, 'Verkauf', '');
    this.addDepartment(1, 'Einkauf', '');
    this.addDepartment(2, 'Druckerei', '');
  }

  addDepartment(id: number, name: string, description: string) {
    this.departmentList.push(new Department(id, name, description));
  }

  getAllDepartments() {
    return this.departmentList;
  }

  getDepartmentByShortHand(id: number): Department {
      return this.departmentList.find(department => department.id === id);
  }

  // find department by id in departmentList
  getDepartment(): Department {
      return this.departmentList.find(this.findDepartment);
  }

  findDepartment(department) {
      return department.id === 1;
  }

}
