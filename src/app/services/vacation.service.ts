import { Vacation } from '../entities/vacation.model';
import { Employee } from '../entities/employee.model';

export class VacationService {
  private vacationList: Vacation[] = [];

  constructor() {}

  addVacationOnInit(employee: Employee) {
    // Achtung : Januar fängt bei 0 an...
    // this.addVacation(employee, new Date(2019, 3, 7), new Date(2019, 3, 8), false, false);
    // this.addVacation(employee, new Date(2019, 4, 1), new Date(2019, 4, 2), false, false);
    // this.addVacation(employee, new Date(2019, 2, 7), new Date(2019, 2, 8), false, false);
  }

  addVacation(employee: Employee, dateFrom: Date, dateTo: Date, isHalfFrom: boolean, isHalfTo: boolean) {
    this.vacationList.push(new Vacation(employee, dateFrom, dateTo, isHalfFrom, isHalfTo));
  }

  getAllVacation() {
    return this.vacationList;
  }

}
