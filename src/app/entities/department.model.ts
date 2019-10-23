import {Employee} from './employee.model';

export class Department {
  name: string;
  description: string;
  firstHead: Employee;
  secondHead: Employee;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

}
