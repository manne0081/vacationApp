import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5'

import { CookieService } from 'ngx-cookie-service';
import { EmployeeService } from '../services/employee.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('inputUsername', {static: true}) inputUsername: ElementRef;
  @ViewChild('inputPassword', {static: true}) inputPassword: ElementRef;

  isSetCookie: boolean = this.cookieService.check('rmbLogin');
  cookieValue = 'UNKNOWN';
  isUsernameCorrect = true;
  isPasswordCorrect = true;
  loginMessage: string;
  isLoginFailed: boolean;
  rememberLogin: boolean;
  rememberLoginMessage: string;
  loginMessageFailed: string;
  username: string;
  password: string;

  constructor(private cookieService: CookieService,
              private router: Router,
              private employeeService: EmployeeService,
              private sessionService: SessionService) {}

  ngOnInit() {
    console.log(this.employeeService);
    this.loginMessageFailed = 'Benutzername oder Kennwort wurde falsch eingegeben!';
    if (this.isSetCookie) {
      this.rememberLogin = true;
    }
    this.rememberLoginMessage = 'Angemeldet bleiben!';
  }

  ngAfterViewInit() {
    this.inputUsername.nativeElement.focus();                                      // set focus to input-field
  }

  onClickLogin(): void {
    this.isUsernameCorrect = this.checkUsername(this.username);
    this.isPasswordCorrect = this.checkPassword(this.password);

    if (this.isUsernameCorrect && this.isPasswordCorrect) {
      // console.log('Login success');
      this.loginMessage = '';
      this.isLoginFailed = false;

      let hash = Md5.hashStr(this.username);
      console.log(hash);
      let hashString = '' + hash;
      console.log(hashString);
      this.sessionService.setUser(this.username);
                            
      if (this.rememberLogin) {
        this.cookieService.set( 'rmbLogin', this.username, 7);
        this.cookieValue = this.cookieService.get('rmbLogin');
      } else {
        this.cookieService.set( 'login', 'Session2');
        this.cookieService.delete('rmbLogin');
      }
      // Forward to Dashboard      
      this.router.navigate(['/dashboard']);

      } else {

      // console.log('Login failed');
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
      this.isLoginFailed = true;
      this.loginMessage = message;
    }
  }

  checkUsername(username): boolean {
    // check username...
    for (const entrie of this.employeeService.getData()) {
      if (entrie === username) {
        // check password...

        return true;
      } else {
        return false;
      }
    }
  }

  checkPassword(password): boolean {
    if (password === 'pass') {
      return true;
    } else {
      return false;
    }
  }

  toggleRememberLogin() {
    if (!this.rememberLogin) {
      this.rememberLoginMessage = 'Für 7 Tage angemeldet bleiben!';
    } else {
      this.rememberLoginMessage = 'Angemeldet bleiben!';
    }
  }

}
