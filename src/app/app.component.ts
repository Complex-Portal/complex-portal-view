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
    } else {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', environment.analytics_id, 'none');
    }
  }
}
