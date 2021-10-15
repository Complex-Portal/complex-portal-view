import {Injectable} from '@angular/core';
import {Category} from '../types/category.enum';
import {Action} from '../types/action.enum';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Injectable()
export class AnalyticsService {

  constructor(private analytics: GoogleAnalyticsService) {
  }

  private invokeCustomEvent(value: Action, category: Category, label: string): void {
    this.analytics.event(Action[value],  Category[category], label);
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
    this.invokeCustomEvent(Action.searchInvoker, site, type);
  }

  public fireAddToBasketEvent(type: string): void {
    this.invokeCustomEvent(Action.AddToBasket, Category.basket, type);
  }

  public fireRemoveFromBasketEvent(type: string): void {
    this.invokeCustomEvent(Action.RemoveFromBasket, Category.basket, type);
  }

  public fireInteractionWithViewerEvent(viewer: Category, type: string) {
    this.invokeCustomEvent(Action.ComplexVisualisation, viewer, type);
  }

  public fireAddedFilterEvent(type: string) {
    this.invokeCustomEvent(Action.AddResultFilter, Category.ResultFilter, type);
  }

  public fireRemovedFilterEvent(type: string) {
    this.invokeCustomEvent(Action.RemoveResultFilter, Category.ResultFilter, type);
  }

  public fireMultiFilterEvent(type: string) {
    this.invokeCustomEvent(Action.FilterByMultipleFields, Category.ResultFilter, type);
  }

  public fireAPIRequestErrorEvent(api: Category, type: string) {
    this.invokeCustomEvent(Action.APIResquestError, api, type);
  }
}
