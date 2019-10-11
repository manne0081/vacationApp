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
    if (this.isSetCookie()) {
      this.sessionService.setUser(this.getCookieUser());
      this.router.navigate(['/dashboard']);
    }
  }

  onClickLogin(): void {
    this.router.navigate(['/login']);
  }

  isSetCookie(): boolean {
    if (this.cookieService.check('rmbLogin') || this.cookieService.check('session')) {
      return true;
    } else {
      return false;
    }
  }

  getCookieUser(): string {
    if (this.cookieService.check('rmbLogin')) {
      return this.cookieService.get('rmbLogin');
    } else if (this.cookieService.check('session')) {
      return this.cookieService.get('session');
    }
  }
}
