import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-local-search',
  templateUrl: './local-search.component.html',
  styleUrls: ['./local-search.component.css']
})
export class LocalSearchComponent implements OnInit {
  private _display: boolean;
  private _query: string;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
        if (this.location.path().startsWith('/home')) {
          this._display = false;
        } else {
          this._display = true;
          if (this.location.path().startsWith('/search')) {
            this.route
              .queryParams
              .subscribe(queryParams => {
                this._query = queryParams['_query'] ? queryParams['_query'] : console.log('Error');
              });
          } else if (this.location.path().startsWith('/complex')) {
            this._query = this.location.path().split("/")[2];
          } else {
            this._query = "";
          }
        }
      }
    );
  }

  search(query: string) {
    this.router.navigate(['search'], { queryParams: { query: query, page: 1 }});
  }


  get display(): boolean {
    return this._display;
  }

  get query(): string {
    return this._query;
  }
}
