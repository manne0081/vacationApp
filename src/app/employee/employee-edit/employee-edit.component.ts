import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../services/session.service';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
    private isCurrentUserAdmin = false;

    constructor(private sessionService: SessionService) {
    }

    ngOnInit() {
        if (this.sessionService.getUser().username === 'dagobert') {
            this.isCurrentUserAdmin = true;
        }
    }

}
