import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {CookieService} from 'ngx-cookie-service';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

import {EmployeeService} from './employee/employee.service';
import {VacationComponent} from './vacation/vacation.component';
import {SessionService} from './services/session.service';
import {LogService} from './services/log.service';
import {VacationService} from './vacation/vacation.service';
import {VacationClaimComponent} from './vacation/vacation-claim/vacation-claim.component';
import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {DepartmentService} from './department/department.service';
import {EmployeeAddComponent} from './employee/employee-add/employee-add.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NavigationAdminComponent} from './navigation/navigation-admin/navigation-admin.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
// import {MatFormFieldModule} from '@angular/material/form-field';

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
        EmployeeAddComponent,
        NavigationComponent,
        NavigationAdminComponent,
        EmployeeEditComponent,
        // MatFormFieldModule,
    ],
    imports: [
        BrowserModule,
        routing,
        FormsModule,
    ],
    providers: [CookieService, EmployeeService, SessionService, LogService, VacationService, DepartmentService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
