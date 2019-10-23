import { Component, OnInit } from '@angular/core';
import { VacationClaim} from '../entities/vacationClaim.model';
import { EmployeeService} from '../services/employee.service';
import { Employee } from '../entities/employee.model';
import { SessionService } from '../services/session.service';
import { VacationService } from '../services/vacation.service';

@Component({
  selector: 'app-vacation-claim',
  templateUrl: './vacation-claim.component.html',
  styleUrls: ['./vacation-claim.component.css']
})
export class VacationClaimComponent implements OnInit {
  currentUser: Employee;
  private year: number;
  private vacationClaim: number;
  private vacationClaimList: VacationClaim[] = [];
  private employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService, private vacationService: VacationService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getAllEmployee();
    this.currentUser = this.sessionService.getUser();
  }

  test(): void {
    this.vacationService.addVacationClaim(this.sessionService.getUser(), this.year, this.vacationClaim);
    this.vacationClaimList = this.vacationService.getAllVacationClaim();
    console.log(this.vacationClaimList);
  }
}
