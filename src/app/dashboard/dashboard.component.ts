import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {SessionService} from '../services/session.service';
import {LogService} from '../services/log.service';
import {VacationService} from '../vacation/vacation.service';
import {Vacation} from '../vacation/vacation.model';
import {Router} from '@angular/router';
import {Department} from '../../department/department.model';

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
                private vacationService: VacationService, private routerService: Router) {
    }

    ngOnInit() {
        if (!this.sessionService.isSetUser()) {
            this.routerService.navigate(['./home']);
        } else {
            if (this.sessionService.getUser().username === 'dagobert') {
                this.isCurrentUserAdmin = true;
            }
            this.vacationService.addVacationOnInit(this.sessionService.getUser());
        }
    }

    ngOnChanges() {
        console.log('ngOnChanges...');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy...');
    }

    onClickTest(event: any): void {
        this.test = 'You clicked the button';
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
