import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LogService } from './log.service';

@Injectable()

export class SessionService {
  private currentUser: string;

  constructor(private cookieService: CookieService, private logService: LogService) {}

  setUser(user: string): void {
    this.currentUser = user;
    this.logService.log('session.service > setUser >> ' + this.currentUser);
  }

  getUser(): string {
    return this.currentUser;
  }
}
