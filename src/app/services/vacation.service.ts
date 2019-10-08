import { Vacation } from '../entities/vacation.model';
import { Employee } from '../entities/employee.model';

export class VacationService {
  private vacationList: Vacation[] = [];

  constructor() {}

  addVacationOnInit(employee: Employee) {
    // this.addVacation(employee, 01.01.2019, false, 01.03.2019, false);
    // this.addVacation(employee, 'hallo', 'welt');
    // this.addVacation(employee, '123', '456');
  }

  addVacation(employee: Employee, dateFrom: Date, dateTo: Date, isHalfFrom: boolean, isHalfTo: boolean) {
    this.vacationList.push(new Vacation(employee, dateFrom, dateTo, isHalfFrom, isHalfTo));
  }

  getVacation() {
    return this.vacationList;
  }

}
