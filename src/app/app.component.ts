import {Component, OnInit, AfterContentInit} from '@angular/core';
import {NotificationService} from './shared/notification/service/notification.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2';
import {environment} from '../environments/environment';
import {ToastrConfig} from "toastr-ng2";
declare var $: any;
declare var ga: any;
const { version: version } = require('../../package.json');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  private version : string;

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private notificationService: NotificationService, private toastrConfig: ToastrConfig) {
    this.version = version;
    toastrConfig.closeButton = true; // show close button
    toastrConfig.timeOut = 0; // time to live
    this.notificationService.addAnnouncementNotification('For reporting issues or any request, please use the \'Issues\'-button in the top bar.', this.toastrConfig);
    this.notificationService.addAnnouncementNotification('This is a development page!', this.toastrConfig);
  }

  ngOnInit(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
    if (environment.production === false) {
      ga('create', environment.analytics_id, 'none');
    } else {
      ga('create', environment.analytics_id, 'none');
    }
    //copied from script.js (ebi framework)
    // Assign global nav background images through meta tags
    (function assignImageByMetaTags() {
      var localMasthead = document.getElementById('local-masthead');
      // check for both ebi: and ebi- formatted meta tags
      var localMastheadColor = document.querySelector("meta[name='ebi:localmasthead-color']") || document.querySelector("meta[name='ebi-localmasthead-color']");
      var localMastheadImage = document.querySelector("meta[name='ebi:localmasthead-image']") || document.querySelector("meta[name='ebi-localmasthead-image']");
      if (localMastheadColor != null) {
        localMasthead.style.backgroundColor = localMastheadColor.getAttribute("content");
        localMasthead.className += ' meta-background-color';
      }
      if (localMastheadImage != null) {
        localMasthead.style.backgroundImage = 'url(' + localMastheadImage.getAttribute("content") + ')';
        localMasthead.className += ' meta-background-image';
      }
    })();
  }


  ngAfterContentInit(): void {

  }
}
