import { Vacation } from '../entities/vacation.model';
import { Employee } from '../entities/employee.model';

export class VacationService {
  private vacationList: Vacation[] = [];

  constructor() {}

  addVacationOnInit(employee: Employee) {
    this.addVacation(employee, 'heute', 'morgen');
    this.addVacation(employee, 'hallo', 'welt');
    this.addVacation(employee, '123', '456');
  }

  addVacation(employee: Employee, dateFrom: string, dateTo: string) {
    this.vacationList.push(new Vacation(employee, dateFrom, dateTo));
  }

  getVacation() {
    return this.vacationList;
  }

}
