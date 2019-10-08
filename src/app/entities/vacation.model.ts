import { Employee } from './employee.model';

export class Vacation {
  private employee: Employee;
  private dateFrom: Date;
  private dateTo: Date;
  isHalfDayFrom: boolean;
  isHalfDayTo: boolean;

  constructor(employee: Employee, dateFrom: Date, dateTo: Date, isHalfFrom: boolean, isHalfTo: boolean) {
    this.employee = employee;
    this.dateFrom = dateFrom;
    this.isHalfDayFrom = isHalfFrom;
    this.dateTo = dateTo;
    this.isHalfDayTo = isHalfTo;
  }

}
