import { Employee } from './employee.model';

export class Vacation {
  private employee: Employee;
  private dateFrom: string;
  private dateTo: string;

  constructor(employee: Employee, dateFrom: string, dateTo: string) {
    this.employee = employee;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

}
