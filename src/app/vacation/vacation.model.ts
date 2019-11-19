import { Employee } from '../employee/employee.model';

export class Vacation {
  private employee: Employee;
  private dateFrom: Date;
  private dateTo: Date;
  isHalfDayFrom: boolean;
  isHalfDayTo: boolean;
  private vacationDays: number;

  constructor(employee: Employee, dateFrom: Date, dateTo: Date, isHalfFrom: boolean, isHalfTo: boolean, vacationDays: number) {
    this.employee = employee;
    this.dateFrom = dateFrom;
    this.isHalfDayFrom = isHalfFrom;
    this.dateTo = dateTo;
    this.isHalfDayTo = isHalfTo;
    this.vacationDays = vacationDays;
  }

}
