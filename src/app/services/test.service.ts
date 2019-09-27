import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  testString: string;

  constructor() { }

  setTest(test: string):void {
    this.testString = test;
    console.log(test);
  }

  getTest(): string {
    return this.testString;
  }

}
