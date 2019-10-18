import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { VacationComponent } from './vacation/vacation.component';
import {VacationClaimComponent} from './vacation-claim/vacation-claim.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vacation', component: VacationComponent },
  { path: 'vacationClaim', component: VacationClaimComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
