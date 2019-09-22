import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vacationApp';
  cookieValue = 'UNKNOWN';

  //private cookieService: CookieService
  constructor() {}
    
  ngOnInit(): void {
    //this.cookieService.set( 'rmbLogin', 'Hello World' );
    //this.cookieValue = this.cookieService.get('Test');
  }
  
}
