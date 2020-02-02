import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {SessionService} from '../services/session.service';
import {LogService} from '../services/log.service';
import {VacationService} from '../vacation/vacation.service';
import {Vacation} from '../vacation/vacation.model';
import {Router} from '@angular/router';
import {DepartmentService} from '../department/department.service';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges, OnDestroy {
    vacationList: Vacation[] = this.vacationService.getAllVacation();
    test = 'ich bin ein testString';
    values = '';

    private isCurrentUserAdmin = false;

    constructor(private sessionService: SessionService, private logService: LogService,
                private vacationService: VacationService, private routerService: Router,
                private departmentService: DepartmentService) {
    }

    ngOnInit() {
        if (!this.sessionService.isSetUser()) {
            // do this when the rememberCookie isnt active...
            this.routerService.navigate(['./home']);
        } else {
            // do this when the cookie is active
            if (this.sessionService.getUser().username === 'dagobert') {
                this.isCurrentUserAdmin = true;
            }
        }
    }

    ngOnChanges() {
        // console.log('ngOnChanges...');
    }

    ngOnDestroy() {
        // console.log('ngOnDestroy...');
    }

    onClickTest(event: any): void {
        // this.test = 'You clicked the button';
        this.vacationService.addVacationOnInit();
        console.log(this.departmentService.getDepartmentById(1));
        // console.log(this.sessionService.getTest());

    }

    onKeyUp(event: any): void {
        this.values += event.target.value + ' | ';
        console.log(event);
    }

    update(value: string) {
        console.log('blur');
        this.values = value;
    }
}
