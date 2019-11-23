import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '../services/session.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = '';
  private currentUser: string;

  constructor(private cookieService: CookieService, private router: Router, private sessionService: SessionService,
              private logService: LogService) { }

  ngOnInit() {
    if (this.sessionService.isSetUser()) {
      this.currentUser = this.sessionService.getUser().nameI + ' ' + this.sessionService.getUser().nameII;
    }
    this.logService.pushedData.subscribe(
      (data: string) => this.value = data
    );
  }

  onLogOut(): void {
    if (this.cookieService.check('rmbLogin')) {
      this.cookieService.delete('rmbLogin');
    }
    this.sessionService.setUser('');
    this.router.navigate(['/home']);
  }
}
