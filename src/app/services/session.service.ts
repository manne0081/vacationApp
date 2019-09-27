import { Injectable } from '@angular/core';

@Injectable()

export class SessionService {
  private currentUser: string;

  constructor() {}

  setUser(user: string): void {
    this.currentUser = user;
  }

  getUser(): string {
    return this.currentUser;
  }
}
