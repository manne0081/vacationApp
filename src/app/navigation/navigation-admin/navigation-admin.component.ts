import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['../navigation.component.css']
})
export class NavigationAdminComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  onClickLog(): void {
    this.logService.pushData('testString...');
  }

}
