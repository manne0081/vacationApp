import {Component, OnInit} from '@angular/core';
import {VacationService} from './vacation.service';
import {SessionService} from '../services/session.service';
import {Router} from '@angular/router';
import {isNull, isUndefined} from 'util';

@Component({
    selector: 'app-vacation',
    templateUrl: './vacation.component.html',
    styleUrls: ['./vacation.component.css']
})
export class VacationComponent implements OnInit {
    private vacationFrom: Date;
    private vacationTo: Date;
    private isHalfDayFrom = false;
    private isHalfDayTo = false;
    private userVacationClaim;
    private vacationDays: number;
    private restDays: number;
    private isCurrentUserAdmin = false;

    // RadioButton-Test
    title = 'Angular / Radio-Buttons';
    radioItems = 'one two three'.split(' ');
    model = {options: 'one'};  // Standard beim laden der Page...

    constructor(private routerService: Router, private vacationService: VacationService, private sessionService: SessionService) {
    }

    ngOnInit() {
        if (!this.sessionService.isSetUser()) {
            this.routerService.navigate(['./home']);
        } else {
            if (this.sessionService.getUser().username === 'dagobert') {
                this.isCurrentUserAdmin = true;
            }
        }
    }

    onClickVacation() {
        const dateFrom = new Date(this.vacationFrom);
        const dateTo = new Date(this.vacationTo);
        let vacationDays = this.calculateVacationDays(dateFrom, dateTo);
        let halfDay: number;

        if (this.isHalfDayFrom && this.isHalfDayTo) {
            halfDay = 1;
        } else if (this.isHalfDayFrom) {
            halfDay = 0.5;
        } else if (this.isHalfDayTo) {
            halfDay = 0.5;
        } else {
            halfDay = 0;
        }
        vacationDays += 1 - halfDay;

        this.vacationService.addVacation(this.sessionService.getUser(), this.vacationFrom, this.vacationTo, this.isHalfDayFrom, this.isHalfDayTo, vacationDays);
        console.log(this.vacationService.getAllVacation());
    }

    test(): void {
        const dateFrom = new Date(this.vacationFrom);
        const dateTo = new Date(this.vacationTo);

        // if (dateFrom < new Date() || dateTo < new Date()) {
        //   console.log('Der ausgewählte Zeitraum liegt in der Vergangenheit');
        //   return;
        // }
        // if (this.vacationFrom && this.vacationTo) {
        //   // the vacationTime have to be calculated
        //   const vacationDays = this.calculateVacationDays(dateFrom, dateTo);
        //   let halfDay: number;
        //   if (this.isHalfDayFrom && this.isHalfDayTo) {
        //     halfDay = 1;
        //   } else if (this.isHalfDayFrom) {
        //     halfDay = 0.5;
        //   } else if (this.isHalfDayTo) {
        //     halfDay = 0.5;
        //   } else {
        //     halfDay = 0;
        //   }
        //   this.vacationDays = day + 1 - halfDay;
        // } else if (this.vacationFrom && !this.vacationTo) {
        //   // it has to be taken one day
        //   if (!this.isHalfDayFrom) {
        //     this.vacationDays = 1;
        //   } else {
        //     this.vacationDays = 0.5;
        //   }
        // } else if (isUndefined(this.vacationFrom) && isUndefined(this.vacationTo)) {
        //   // it has nothing to work for
        //   this.vacationDays = 0;
        //   this.restDays = 0;
        // } else if (!this.vacationFrom && this.vacationTo) {
        //   // it has nothing to work for
        //   this.vacationDays = 0;
        //   this.restDays = 0;
        // } else if (!this.vacationFrom && !this.vacationTo) {
        //   // it has nothing to work for
        //   this.vacationDays = 0;
        //   this.restDays = 0;
        // }
        // this.restDays = this.userVacationClaim - this.vacationDays;
    }

    calculateVacationDays(vacationFrom: Date, vacationTo: Date): number {
        const milsec = vacationTo.getTime() - vacationFrom.getTime();
        const sec = milsec / 1000;
        const min = sec / 60;
        const std = min / 60;
        const day = std / 24;
        return day;
    }

    // RadioButton-Test
    get debug() {
        return JSON.stringify(this.model);
    }

}
