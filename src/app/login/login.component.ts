import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { EmployeeService } from '../services/employee.service';
import { SessionService } from '../services/session.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('inputUsername', {static: true}) inputUsername: ElementRef;
  @ViewChild('inputPassword', {static: true}) inputPassword: ElementRef;

  isUsernameCorrect = true;
  isPasswordCorrect = true;
  loginFailedMessage: string;
  isRememberLogin: boolean;
  rememberLoginMessage = 'Angemeldet bleiben!';
  username: string;
  password: string;

  constructor(private cookieService: CookieService, private router: Router, private employeeService: EmployeeService,
              private sessionService: SessionService, private logService: LogService) {}

  ngOnInit() {
    // load dashboard if is set the rmbLogin-cookie
    if (this.cookieService.check('rmbLogin')) {
      this.sessionService.setUser(this.cookieService.get('rmbLogin'));
      this.router.navigate(['/dashboard']);
    }
  }

  ngAfterViewInit() {
    this.inputUsername.nativeElement.focus();                                      // set focus to input-field
  }

  onClickLogin(): void {
    // check if username and password are correct
    this.isUsernameCorrect = this.checkUsername(this.username);
    this.isPasswordCorrect = this.checkPassword(this.password);

    if (this.isUsernameCorrect && this.isPasswordCorrect) {
      // if both correct set session and load dashboard
      this.loginFailedMessage = '';
      this.sessionService.setUser(this.username);

      if (this.isRememberLogin) {
        // if checkbox rememberMe is true >> set cookie rmbLogin
        this.cookieService.set( 'rmbLogin', this.username, 7);
      }
      // forward to dashboard
      this.router.navigate(['/dashboard']);

      } else {
      // generate message if username or password aren't correct
      let message: string;
      if (!this.isUsernameCorrect && !this.isPasswordCorrect) {
        message = 'Benutzername und Kennwort wurden falsch eingegeben!';
        this.inputUsername.nativeElement.focus();
      } else if (!this.isUsernameCorrect && this.isPasswordCorrect) {
        message = 'Der Benutzername existiert nicht!';
        this.inputUsername.nativeElement.focus();
      } else if (this.isUsernameCorrect && !this.isPasswordCorrect) {
        message = 'Das eingegebene Kennwort ist ungültig!';
        this.inputPassword.nativeElement.focus();
      }
      this.loginFailedMessage = message;
    }
  }

  checkUsername(username): boolean {
    let bool = false;
    for (const entrie of this.employeeService.getAllEmployee()) {
      if (entrie.username === username) {
        bool = true;
      }
    }
    return bool;
  }

  checkPassword(password): boolean {
    let bool = false;
    for (const entrie of this.employeeService.getAllEmployee()) {
      if (entrie.password === password) {
        bool = true;
      }
    }
    return bool;
  }

  toggleRememberLogin() {
    if (!this.isRememberLogin) {
      this.rememberLoginMessage = 'Für 7 Tage angemeldet bleiben!';
    } else {
      this.rememberLoginMessage = 'Angemeldet bleiben!';
    }
  }

}
