import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {SessionService} from '../services/session.service';

@Component({
    selector: 'app-example',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges, OnDestroy {
    private isCurrentUserAdmin = false;

    constructor(private sessionService: SessionService) {
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
}
