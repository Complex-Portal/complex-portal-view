import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {ProgressBarComponent} from './shared/loading-indicators/progress-bar/progress-bar.component';
import {NavigationEnd, Router} from '@angular/router';
import {BasketService} from './shared/basket/service/basket.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2';

declare const $: any;
declare const ga: any;

const {version: version} = require('../../package.json');
const environmentName: string = environment.evn;

@Component({
  selector: 'cp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  private _version: string;
  private _environmentName: string;
  private _basketCount = 0;
  private _complexPortalSupportUrl = environment.complex_portal_support_url;
  private _onChangeInBasket: boolean;

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
              private router: Router,
              private basketService: BasketService) {
    this._basketCount = this.basketService.getBasketCount();
    this._version = version;
    this._environmentName = environmentName;
  }

  ngOnInit(): void {
    this.observeRouteChange();
    this.observeBasketChange();
    this.initialiseFoundation();
  }

  ngAfterViewInit(): void {
    // Init some libs.
    // this.initialiseFoundation();
    this.initialiseGoogleAnalytics();
    // this.initialiseFoundationHacks();
  }

  // Candidate for utils.
  private initialiseFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }

  private initialiseGoogleAnalytics(): void {
    ga('create', environment.analytics_id, 'none');
  }

  private observeRouteChange() {
    // For every router change, we load the ProgressBar by default.
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        ProgressBarComponent.display();
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  private observeBasketChange() {
    this.basketService.onBasketCountChanged$.subscribe(count => {
      this._basketCount = count;
      this._onChangeInBasket = true;
      const ctx = this;
      setTimeout(function () {
        ctx._onChangeInBasket = false;
      }, 1000);
    });
  }


  // private initialiseFoundationHacks(): void {
  //   // copied from script.js (ebi framework)
  //   // Assign global nav background images through meta tags
  //   (function assignImageByMetaTags() {
  //     const localMasthead = document.getElementById('local-masthead');
  //     // check for both ebi: and ebi- formatted meta tags
  //     // tslint:disable
  //     let localMastheadColor = document.querySelector("meta[name='ebi:localmasthead-color']")
  //       || document.querySelector("meta[name='ebi-localmasthead-color']");
  //     let localMastheadImage = document.querySelector("meta[name='ebi:localmasthead-image']")
  //       || document.querySelector("meta[name='ebi-localmasthead-image']");
  //     if (localMastheadColor != null) {
  //       localMasthead.style.backgroundColor = localMastheadColor.getAttribute("content");
  //       localMasthead.className += ' meta-background-color';
  //     }
  //     if (localMastheadImage != null) {
  //       localMasthead.style.backgroundImage = 'url(' + localMastheadImage.getAttribute("content") + ')';
  //       localMasthead.className += ' meta-background-image';
  //     }
  //     // tslint:enable
  //   })();
  // }

  get version(): string {
    return this._version;
  }

  set version(value: string) {
    this._version = value;
  }

  get environmentName(): string {
    return this._environmentName;
  }

  set environmentName(value: string) {
    this._environmentName = value;
  }


  get basketCount(): number {
    return this._basketCount;
  }

  get complexPortalSupportUrl(): string {
    return this._complexPortalSupportUrl;
  }

  get onChangeInBasket(): boolean {
    return this._onChangeInBasket;
  }
}
