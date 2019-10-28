import { Vacation } from '../entities/vacation.model';
import { VacationClaim } from '../entities/vacationClaim.model';
import { Employee } from '../entities/employee.model';

export class VacationService {
  private vacationList: Vacation[] = [];
  private vacationClaimList: VacationClaim[] = [];

  constructor() {}

  addVacationOnInit(employee: Employee) {
    // Achtung : Januar fängt bei 0 an...
    // this.addVacation(employee, new Date(2019, 3, 7), new Date(2019, 3, 8), false, false);
    // this.addVacation(employee, new Date(2019, 4, 1), new Date(2019, 4, 2), false, false);
    // this.addVacation(employee, new Date(2019, 2, 7), new Date(2019, 2, 8), false, false);

    // this.vacationClaimList.push(new VacationClaim(employee, 2018, 30));
    // this.vacationClaimList.push(new VacationClaim(employee, 2019, 30));
    // this.vacationClaimList.push(new VacationClaim(employee, 2020, 30));
  }

  addVacation(employee: Employee, dateFrom: Date, dateTo: Date, isHalfFrom: boolean, isHalfTo: boolean, vacationDays: number) {
    this.vacationList.push(new Vacation(employee, dateFrom, dateTo, isHalfFrom, isHalfTo, vacationDays));
  }

  getAllVacation() {
    return this.vacationList;
  }

  addVacationClaim(employee: Employee, year: number, vacationClaim: number): void {
    this.vacationClaimList.push(new VacationClaim(employee, year, vacationClaim));
  }

  getAllVacationClaim() {
    return this.vacationClaimList;
  }

}
