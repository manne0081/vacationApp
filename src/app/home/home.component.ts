import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  isSetCookie: boolean = this.cookieService.check('rmbLogin');
  rememberLogin: boolean;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private testService: TestService) { }

  ngOnInit() {
    if (this.isSetCookie) {
      this.rememberLogin = true;
      this.router.navigate(['/dashboard']);
    }
    this.testService.setTest('test... :-)');
  }

  onClickLogin(): void {
    this.router.navigate(['/login']);
  }

}
