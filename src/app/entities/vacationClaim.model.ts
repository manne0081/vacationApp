import { Employee } from './employee.model';

export class VacationClaim {
  private employee: Employee;
  private year: number;
  private vacationClaim: number;

  constructor(employee: Employee, year: number, vacationClaim: number) {
    this.employee = employee;
    this.year = year;
    this.vacationClaim = vacationClaim;

  }
}
