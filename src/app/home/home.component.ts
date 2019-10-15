import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService,
              private sessionService: SessionService) { }

  ngOnInit() {
    if (this.cookieService.check('rmbLogin')) {
      this.sessionService.setUser(this.cookieService.get('rmbLogin'));
      this.router.navigate(['/dashboard']);
    }
  }

  onClickLogin(): void {
    this.router.navigate(['/login']);
  }
}
