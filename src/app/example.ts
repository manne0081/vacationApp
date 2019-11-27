import {Component, OnInit} from '@angular/core';
import {SessionService} from './services/session.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-example',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class ExampleComponent implements OnInit {
    private isCurrentUserAdmin = false;

    constructor(private sessionService: SessionService, private routerService: Router) {
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
