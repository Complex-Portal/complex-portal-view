import {Injectable} from '@angular/core';
import {AnalyticsService} from '../../shared/google-analytics/service/analytics.service';
import {Router} from '@angular/router';
import {Category} from '../../shared/google-analytics/types/category.enum';

@Injectable()
export class SearchService {
  private _query: string;

  constructor(private router: Router, private googleAnalyticsService: AnalyticsService) {
  }

  search(query: string, category: Category, typeOfButton: string) {
    this._query = query;

    this.googleAnalyticsService.fireSearchInvokerEvent(category, typeOfButton);
    this.googleAnalyticsService.fireSearchTermEvent(category, query);
    this.router.navigate(['complex/search'], {queryParams: {query: query, page: 1}});
  }

  get query(): string {
    return this._query;
  }

  set query(value: string) {
    this._query = value;
  }
}
