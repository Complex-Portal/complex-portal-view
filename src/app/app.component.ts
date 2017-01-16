import {Component, OnInit} from '@angular/core';
import {NotificationService} from './shared/notification/service/notification.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import {environment} from '../environments/environment';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private notificationService: NotificationService,private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

  ngOnInit(): void {
    if (environment.production === false) {
      this.notificationService.addStaticNotification('Please be aware the you\'re currently looking a DEV version of the Complex Portal!');
    }
  }
}
