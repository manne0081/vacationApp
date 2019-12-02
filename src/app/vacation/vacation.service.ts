import { Vacation } from './vacation.model';
import { VacationClaim } from './vacation-claim/vacationClaim.model';
import { Employee } from '../employee/employee.model';
import {SessionService} from '../services/session.service';
import {Injectable} from '@angular/core';

@Injectable()
export class VacationService {
  private vacationList: Vacation[] = [];
  private vacationClaimList: VacationClaim[] = [];

  constructor(private sessionService: SessionService) {}

  addVacationOnInit() {
    // Achtung : Januar fängt bei 0 an...
    this.addVacation(0, this.sessionService.getUser(), new Date(2019, 3, 7), new Date(2019, 3, 8), false, false, 2);
    this.addVacation(1, this.sessionService.getUser(), new Date(2019, 4, 1), new Date(2019, 4, 2), false, false, 2);
    this.addVacation(2, this.sessionService.getUser(), new Date(2019, 2, 7), new Date(2019, 2, 8), false, false, 2);

    // this.vacationClaimList.push(new VacationClaim(employee, 2018, 30));
    // this.vacationClaimList.push(new VacationClaim(employee, 2019, 30));
    // this.vacationClaimList.push(new VacationClaim(employee, 2020, 30));
  }

  addVacation(id: number, employee: Employee, dateFrom: Date, dateTo: Date, isHalfFrom: boolean, isHalfTo: boolean, vacationDays: number) {
    this.vacationList.push(new Vacation(id, employee, dateFrom, dateTo, isHalfFrom, isHalfTo, vacationDays));
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
