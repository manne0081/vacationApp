import { Vacation } from '../entities/vacation.model';

export class VacationService {
  private vacationList: Vacation[] = [];

  addVacation(empl: string, dateFrom: string, dateTo: string) {
    this.vacationList.push(new Vacation(empl, dateFrom, dateTo));
  }

  getVacation() {
    return this.vacationList;
  }

}
