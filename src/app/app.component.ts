import {Component, OnInit, AfterContentInit} from '@angular/core';
import {NotificationService} from './shared/notification/service/notification.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2';
import {environment} from '../environments/environment';
declare var $: any;
declare var ga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {

  constructor(private notificationService: NotificationService, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  }

  ngOnInit(): void {
    if (environment.production === false) {
      this.notificationService.addStaticNotification('Please be aware the you\'re currently looking a DEV version of the Complex Portal!');
    } else {
      ga('create', environment.analytics_id, 'none');
    }
  }


  ngAfterContentInit(): void {
  }
}
