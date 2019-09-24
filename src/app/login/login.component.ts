import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
  loginMessageFailed: string;
  isVisible = false;
  username: string;
  password: string;



  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit() {
    this.loginMessageFailed = 'Benutzername oder Kennwort wurde falsch eingegeben!';
    if (this.isSetCookie) {
      this.rememberLogin = true;
      // const value: string = this.cookieService.get('rmbLogin');
      // console.log('cookieValue ist: ' + value);
    }
  }

  ngAfterViewInit() {
    // console.log(this.inputUsername.nativeElement);
    this.inputUsername.nativeElement.focus();                                      //set focus to input-field
  }

  onClickLogin(): void {
    console.clear();
    this.isUsernameCorrect = this.checkUsername(this.username);
    this.isPasswordCorrect = this.checkPassword(this.password);

    if (this.isUsernameCorrect && this.isPasswordCorrect) {
      console.log('Login success');
      this.loginMessage = '';
      this.isLoginFailed = false;
      console.log('System-Aktion > Anmeldung erfolgreich > Weiterleitung...');
        if (this.rememberLogin) {
          console.log('System-Aktion > Set Cookie > remain signed in');
          this.cookieService.set( 'rmbLogin', 'CookieValue', 7);
          this.cookieValue = this.cookieService.get('Test');
        } else {
          this.cookieService.delete('rmbLogin');
        }
        // Weiterleitung
        this.router.navigate(['/dashboard']);


      } else {
      console.log('Login failed');
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
    if (username === 'user') {
      return true;
    } else {
      return false;
    }
  }

  checkPassword(password): boolean {
    if (password === 'pass') {
      return true;
    } else {
      return false;
    }
  }

  deleteCookie(): void {
    this.cookieService.delete('rmbLogin');
  }

}
