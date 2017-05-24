import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GoogleAnalyticsService} from '../shared/google-analytics/google-analytics.service';
import {Category} from '../shared/google-analytics/category.enum';
import {Action} from '../shared/google-analytics/action.enum';

@Component({
  selector: 'cp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private ga: GoogleAnalyticsService) {
  }

  ngOnInit() {
  }

  search(query: string, typeOfButton: string) {
    if (typeOfButton === 'enter') {
      this.ga.invokeCustomEvent(Action.searchInvoker, Category.home, typeOfButton);
    } else {
      this.ga.invokeCustomEvent(Action.searchInvoker, Category.home, typeOfButton);
    }
    this.ga.invokeCustomEvent(Action.search, Category.home, query);
    this.router.navigate(['complex/search'], {queryParams: {query: query, page: 1}});
  }
}
