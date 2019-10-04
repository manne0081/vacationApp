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
  currentUser: string;
  value = '';

  constructor(private cookieService: CookieService, private router: Router, private sessionService: SessionService,
              private logService: LogService) { }

  ngOnInit() {
    this.currentUser = this.sessionService.getUser();
    this.logService.pushedData.subscribe(
      (data: string) => this.value = data
    );
  }

  onLogOut(): void {
    this.cookieService.delete('rmbLogin');
    this.router.navigate(['/home']);
  }

}
