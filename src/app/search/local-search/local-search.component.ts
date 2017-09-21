import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {GoogleAnalyticsService} from '../../shared/google-analytics/google-analytics.service';
import {Action} from '../../shared/google-analytics/action.enum';
import {Category} from '../../shared/google-analytics/category.enum';


@Component({
  selector: 'cp-local-search',
  templateUrl: './local-search.component.html',
  styleUrls: ['./local-search.component.css']
})
export class LocalSearchComponent implements OnInit {
  private _display: boolean;
  private _query: string;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private ga: GoogleAnalyticsService) {

  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
        if (this.location.path().startsWith('/home')) {
          this._display = false;
        } else {
          this._display = true;
          if (this.location.path().startsWith('/complex/search')) {
            this.route
              .queryParams
              .subscribe(queryParams => {
                this._query = queryParams['query'];
              });
          } else if (this.location.path().startsWith('/complex/organisms')) {
            this._query = '';
          } else if (this.location.path().startsWith('/complex')) {
            this._query = this.location.path().split('/')[2];
          } else {
            this._query = '';
          }
        }
      }
    );
  }

  search(query: string, type: string) {
    if (type === 'enter') {
      this.ga.invokeCustomEvent(Action.searchInvoker, Category.header, type);
    } else {
      this.ga.invokeCustomEvent(Action.searchInvoker, Category.header, type);
    }
    this.ga.invokeCustomEvent(Action.search, Category.header, query);
    this.router.navigate(['complex/search'], {queryParams: {query: query, page: 1}});
  }

  get display(): boolean {
    return this._display;
  }

  get query(): string {
    return this._query;
  }
}
