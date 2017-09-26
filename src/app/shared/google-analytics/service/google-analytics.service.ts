import {Injectable} from '@angular/core';
import {Angulartics2} from 'angulartics2';
import {Category} from '../category.enum';
import {Action} from '../action.enum';

@Injectable()
export class GoogleAnalyticsService {

  constructor(private angulartics2: Angulartics2) {
  }

  private invokeCustomEvent(value: Action, category: Category, label: string): void {
    this.angulartics2.eventTrack.next({
      action: Action[value],
      properties: {category: Category[category], label: label}
    });
  }

  public fireDownloadResourceEvent(site: Category, type: string): void {
    this.invokeCustomEvent(Action.download, site, type);
  }

  public fireOpenExternalLinkEvent(site: Category, type: string): void {
    this.invokeCustomEvent(Action.externalLink, site, type);
  }

  public fireClickHomeTileEvent(type: string): void {
    this.invokeCustomEvent(Action.Tile, Category.home, type);
  }

  public fireGoToDetailsSectionEvent(type: string): void {
    this.invokeCustomEvent(Action.GoToMenu, Category.details, type);
  }

  public fireSearchTermEvent(site: Category, type: string): void {
    this.invokeCustomEvent(Action.search, site, type);
  }

  // To identify if user use 'enter' or if they click with the mouse on the magnifier.
  // 'site' is not the actual site, but if it is the homepage or the header search box
  public fireSearchInvokerEvent(site: Category, type: string): void {
    this.invokeCustomEvent(Action.searchInvoker, site, type)
  }

  public fireAddToBasketEvent(type: string): void {
    this.invokeCustomEvent(Action.AddToBasket, Category.basket, type);
  }

  public fireRemoveFromBasketEvent(type: string): void {
    this.invokeCustomEvent(Action.RemoveFromBasket, Category.basket, type);

  }
}
