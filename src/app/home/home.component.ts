import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSetCookie: boolean = this.cookieService.check('rmbLogin');
  rememberLogin: boolean;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    if (this.isSetCookie) {
      this.rememberLogin = true;
      console.log('variable rememberLogin = true');
      this.router.navigate(['/dashboard']);
    }
  }

  onClickLogin(): void {
    this.router.navigate(['/login']);
  }

}
