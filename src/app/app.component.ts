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

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {

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
