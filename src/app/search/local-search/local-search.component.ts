import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Category} from '../../shared/google-analytics/types/category.enum';
import {SearchService} from '../service/search.service';


@Component({
  selector: 'cp-local-search',
  templateUrl: './local-search.component.html',
  styleUrls: ['./local-search.component.scss']
})
export class LocalSearchComponent implements OnInit {
  private _display: boolean;
  private _query: string;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute,
              private searchService: SearchService) {

  }

  ngOnInit() {
    this.extractQueryFromURL();
  }

  // TODO: REVIEW THIS METHOD
  private extractQueryFromURL() {
    // Retrieve query from URL. Would be nice to have it in the service.. but time etc.
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
            this._query = ''; // this.location.path().split('/')[2];
          } else {
            this._query = '';
          }
        }
      }
    );
  }

  search(query: string, typeOfButton: string) {
    this.searchService.search(query, Category.header, typeOfButton)
  }

  get display(): boolean {
    return this._display;
  }

  get query(): string {
    return this._query;
  }
}
