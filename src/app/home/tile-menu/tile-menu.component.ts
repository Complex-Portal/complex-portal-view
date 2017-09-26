import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {NotificationService} from '../../shared/notification/service/notification.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Action} from '../../shared/google-analytics/action.enum';
import {Category} from '../../shared/google-analytics/category.enum';
import {GoogleAnalyticsService} from '../../shared/google-analytics/google-analytics.service';

declare const $: any;

@Component({
  selector: 'cp-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements AfterViewInit {

  constructor(private notificationService: NotificationService, private router: Router, private googleAnalyticsService : GoogleAnalyticsService) {
  }

  ngAfterViewInit(): void {
    $('cp-tile-menu').foundation();
  }

  featureNotAvailableYet() {
    this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
  }

  public goToDownload(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('download');
    this.router.navigate(['download']);
  }

  public goToBasket(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('basket');
    this.router.navigate(['basket']);
  }

  public goToOrganisms(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('organisms');
    this.router.navigate(['complex/organisms']);
  }

  public goToOntologies(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('ontologies');
    this.featureNotAvailableYet();
    this.router.navigate(['ontologies']);
  }

  public goToRequestComplex(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('request complex');
    window.open(environment.intact_support_url, '_blank');
  }

  public goToTraining(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('training');
    window.open(environment.intact_training_url, '_blank');
  }

  public goToDocumentation(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('documentation');
    this.router.navigate(['documentation']);
  }

  public goToCitation(): void {
    this.googleAnalyticsService.fireClickHomeTileEvent('citation');
    this.featureNotAvailableYet();
    this.router.navigate(['home']);
  }
}
