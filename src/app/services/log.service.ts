import {EventEmitter} from '@angular/core';

export class LogService {
  pushedData = new EventEmitter<string>();
  constructor() { }

  log(message: string) {
    console.log(message);
  }

  pushData(value: string) {
    this.pushedData.emit(value);
  }
}
