import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComplexSearch} from "../shared/model/complex-results/complex-search.model";
import {ComplexPortalService} from "../shared/service/complex-portal.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class ComplexResultsComponent implements OnInit {

  private query;
  private _complexSearch: ComplexSearch;


  constructor(private route: ActivatedRoute,
              private complexPortalService: ComplexPortalService) {
  }


  get complexSearch(): ComplexSearch {
    return this._complexSearch;
  }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(queryParams => {
        this.query = queryParams['query'];
        this.complexPortalService.findComplex(this.query).subscribe(
          complexSearch => this._complexSearch = complexSearch);
        // error => this.errorMessage = <any>error);
      });
  }

}
