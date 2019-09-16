import { Component, OnInit } from '@angular/core';
import { ɵBrowserPlatformLocation } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUsernameCorrect: boolean;
  isPasswordCorrect: boolean;
  loginMessage: String;
  isLoginFailed: boolean;
  isRemainLogin: boolean;
  loginMessageFailed: String;
  isVisible = false;
  username: String;
  password: String;
  constructor() { }

  ngOnInit() {
    this.loginMessageFailed = "Benutzername oder Kennwort wurde falsch eingegeben!"
  }

  onClickLogin():void {   

    this.checkUsername();
    this.checkPassword();

    if(this.isUsernameCorrect && this.isPasswordCorrect) {
      console.log('Login success'); 
      this.loginMessage = '';
      this.isLoginFailed = false;
      console.log('System-Aktion > Anmeldung erfolgreich > Weiterleitung...');
        if(this.isRemainLogin){
          console.log('System-Aktion > Set Cookie > remain signed in');
        }
      } else {
      console.log('Login failed');
      this.loginMessage = 'Login fehlgeschlagen';
      this.isLoginFailed = true;
    }

  }

  checkUsername():void {
    if (this.username == 'user') {
      this.isUsernameCorrect = true;
    } else {
      this.isUsernameCorrect = false;
    }
  }

  checkPassword():void {
    if (this.password == 'pass') {
      this.isPasswordCorrect = true;
    } else {
      this.isPasswordCorrect = false;
    }
  }

}
