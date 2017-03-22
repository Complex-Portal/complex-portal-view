import {Component, OnInit, AfterViewInit} from '@angular/core';
import {NotificationService} from './shared/notification/service/notification.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2';
import {environment} from '../environments/environment';

import {ProgressBarComponent} from './shared/loading-indicators/progress-bar/progress-bar.component';
import {NavigationEnd, Router} from '@angular/router';
import {ToastrConfig} from "ngx-toastr";
declare const $: any;
declare const ga: any;

const {version: version} = require('../../package.json');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  private _version: string;

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private router: Router,
              private notificationService: NotificationService, private toastrConfig: ToastrConfig) {
    this._version = version;
    toastrConfig.closeButton = true; // displayedElements close button
    toastrConfig.timeOut = 0; // time to live
    this.notificationService.addAnnouncementNotification('For reporting issues or any request, please use the ' +
      '\'Issues\'-button in the top bar.', this.toastrConfig);
    this.notificationService.addAnnouncementNotification('This is a development page!', this.toastrConfig);
  }

  ngOnInit(): void {
    this.initialiseFoundation();
    if (environment.production === false) {
      ga('create', environment.analytics_id, 'none');
    } else {
      ga('create', environment.analytics_id, 'none');
    }
    // copied from script.js (ebi framework)
    // Assign global nav background images through meta tags
    (function assignImageByMetaTags() {
      const localMasthead = document.getElementById('local-masthead');
      // check for both ebi: and ebi- formatted meta tags
      // tslint:disable
      let localMastheadColor = document.querySelector("meta[name='ebi:localmasthead-color']")
        || document.querySelector("meta[name='ebi-localmasthead-color']");
      let localMastheadImage = document.querySelector("meta[name='ebi:localmasthead-image']")
        || document.querySelector("meta[name='ebi-localmasthead-image']");
      if (localMastheadColor != null) {
        localMasthead.style.backgroundColor = localMastheadColor.getAttribute("content");
        localMasthead.className += ' meta-background-color';
      }
      if (localMastheadImage != null) {
        localMasthead.style.backgroundImage = 'url(' + localMastheadImage.getAttribute("content") + ')';
        localMasthead.className += ' meta-background-image';
      }
      // tslint:enable
    })();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        ProgressBarComponent.display();
        return;
      }
      window.scrollTo(0, 0);
    });
  }


  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  // Candidate for utils.
  private initialiseFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }

  get version(): string {
    return this._version;
  }

  set version(value: string) {
    this._version = value;
  }
}
