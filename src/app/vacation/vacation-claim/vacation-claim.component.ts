import { Component, OnInit } from '@angular/core';
import { VacationClaim} from '../../entities/vacationClaim.model';
import { EmployeeService} from '../../services/employee.service';
import { Employee } from '../../entities/employee.model';
import { SessionService } from '../../services/session.service';
import { VacationService } from '../../services/vacation.service';

@Component({
  selector: 'app-vacation-claim',
  templateUrl: './vacation-claim.component.html',
  styleUrls: ['./vacation-claim.component.css']
})
export class VacationClaimComponent implements OnInit {
  currentUser: Employee;
  private year: number;
  private vacationClaim: number;
  private vacationClaimList = this.vacationService.getAllVacationClaim();
  private employeeList: Employee[] = [];
  private employee: Employee;

  constructor(private employeeService: EmployeeService, private vacationService: VacationService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.employeeList = this.employeeService.getAllEmployee();
    this.currentUser = this.sessionService.getUser();
    this.employee = this.currentUser;
  }

  onClickSave(): void {
    console.log(this.employee);
    this.vacationService.addVacationClaim(this.employee, this.year, this.vacationClaim);
  }
}
