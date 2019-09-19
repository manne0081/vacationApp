import { Component, OnInit } from '@angular/core';
import {createBundleIndexHost} from '@angular/compiler-cli';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUsernameCorrect = true;
  isPasswordCorrect = true;
  loginMessage: string;
  isLoginFailed: boolean;
  isRememberLogin: boolean;
  loginMessageFailed: string;
  isVisible = false;
  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
    this.loginMessageFailed = 'Benutzername oder Kennwort wurde falsch eingegeben!';
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
        if (this.isRememberLogin) {
          console.log('System-Aktion > Set Cookie > remain signed in');
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

}
