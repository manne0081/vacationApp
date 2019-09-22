import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  //@ViewChild('username', ) test: ElementRef;
  
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.loginMessageFailed = 'Benutzername oder Kennwort wurde falsch eingegeben!';
    if (this.isSetCookie) {
      this.rememberLogin = true;
      let value: string = this.cookieService.get('rmbLogin');
      console.log(value);
    }
    //this.test.nativeElement.focus();                                      //set focus to input-field

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
          this.cookieService.set( 'rmbLogin', 'CookieValue', 1);
          this.cookieValue = this.cookieService.get('Test');
        } else {
          this.cookieService.delete('rmbLogin');
        }
      } else {
      console.log('Login failed');
      let message: string;
      if (!this.isUsernameCorrect && !this.isPasswordCorrect) {
        message = 'Benutzername und Kennwort wurden falsch eingegeben!';
      } else if (!this.isUsernameCorrect && this.isPasswordCorrect) {
        message = 'Der Benutzername existiert nicht!';
      } else if (this.isUsernameCorrect && !this.isPasswordCorrect) {
        message = 'Das eingegebene Kennwort ist ungültig!';
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
