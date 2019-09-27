import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: string;

  constructor(private cookieService: CookieService,
              private router: Router,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.currentUser = this.cookieService.get('rmbLogin');
  }

  onLogOut(): void {
    this.cookieService.delete('rmbLogin');
    this.router.navigate(['/home']);
  }

}
