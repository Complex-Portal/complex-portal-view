import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-local-search',
  templateUrl: './local-search.component.html',
  styleUrls: ['./local-search.component.css']
})
export class LocalSearchComponent implements OnInit {
  private display: boolean;
  private query: string;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
        if (this.location.path().startsWith('/home')) {
          this.display = false;
        } else {
          this.display = true;
          if (this.location.path().startsWith('/search')) {
            this.route
              .queryParams
              .subscribe(queryParams => {
                this.query = queryParams['query'] ? queryParams['query'] : console.log('Error');
              });
          } else if (this.location.path().startsWith('/complex')) {
            this.query = this.location.path().split("/")[2];
          } else {
            this.query = "";
          }
        }
      }
    );
  }

  search(query: string) {
    this.router.navigate(['search'], { queryParams: { query: query, page: 1 }});
  }
}
