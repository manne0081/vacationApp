import { Component, OnInit } from '@angular/core';
import { VacationClaim} from './vacationClaim.model';
import { EmployeeService} from '../../employee/employee.service';
import { Employee } from '../../employee/employee.model';
import { SessionService } from '../../services/session.service';
import { VacationService } from '../vacation.service';

@Component({
  selector: 'app-vacation-claim',
  templateUrl: './vacation-claim.component.html',
  styleUrls: ['./vacation-claim.component.css']
})
export class VacationClaimComponent implements OnInit {
  private currentUser: Employee;
  private year: number;
  private vacationClaim: number;
  private vacationClaimList = this.vacationService.getAllVacationClaim();
  private employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService, private vacationService: VacationService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getAllEmployee();
    this.currentUser = this.sessionService.getUser();
  }

  onClickSave(): void {
    this.vacationService.addVacationClaim(this.currentUser, this.year, this.vacationClaim);
    console.log(this.vacationService.getAllVacationClaim());
  }
}
