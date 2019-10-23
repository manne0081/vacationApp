import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { EmployeeService } from './services/employee.service';
import { VacationComponent } from './vacation/vacation.component';
import { SessionService } from './services/session.service';
import { LogService } from './services/log.service';
import { VacationService } from './services/vacation.service';
import { VacationClaimComponent } from './vacation-claim/vacation-claim.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import {DepartmentService} from './services/department.service';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    VacationComponent,
    VacationClaimComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
  ],
  providers: [ CookieService, EmployeeService, SessionService, LogService, VacationService, DepartmentService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
