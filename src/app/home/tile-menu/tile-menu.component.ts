import {Component, OnInit, AfterViewInit} from '@angular/core';
import {NotificationService} from '../../shared/notification/service/notification.service';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Action} from "../../shared/google-analytics/action.enum";
import {Category} from "../../shared/google-analytics/category.enum";
import {GoogleAnalyticsService} from "../../shared/google-analytics/google-analytics.service";

declare const $: any;

@Component({
  selector: 'cp-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements AfterViewInit {

  constructor(private notificationService: NotificationService, private router : Router, private ga : GoogleAnalyticsService) {
  }

  ngAfterViewInit(): void {
    $('cp-tile-menu').foundation();
  }

  featureNotAvailableYet() {
    this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
  }

  public goToDownload(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'download');
    this.router.navigate(['download']);
  }
  public goToBasket(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'basket');
    this.router.navigate(['basket']);
  }
  public goToOrganisms(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'organisms');
    this.router.navigate(['complex/organisms']);
  }

  public goToOntologies(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'ontologies');
    this.router.navigate(['ontologies']);
  }

  public goToRequestComplex(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'request complex');
    window.open(environment.intact_support_url, '_blank');
  }
  public goToTraining(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'training');
    window.open(environment.intact_training_url, '_blank');
  }

  public goToDocumentation(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'documentation');
    this.router.navigate(['documentation']);
  }

  public goToCitation(): void{
    this.ga.invokeCustomEvent(Action.Tile, Category.home, 'citation');
    this.router.navigate(['home']);
  }
}
