import { Employee } from './employee.model';

export class Vacation {
  // private employee: Employee;
  private empl: string;
  private dateFrom: string;
  private dateTo: string;

  constructor(empl: string, dateFrom: string, dateTo: string) {
    // this.employee = employee;
    this.empl = empl;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

}
