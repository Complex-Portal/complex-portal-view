import {Component, OnInit} from '@angular/core';
import {ComplexDetails} from "../shared/model/complex-details/complex-details.model";
import {ActivatedRoute} from "@angular/router";
import {ComplexPortalService} from "../shared/service/complex-portal.service";

@Component({
  selector: 'app-complex-details',
  templateUrl: './complex-details.component.html',
  styleUrls: ['./complex-details.component.css']
})
export class ComplexDetailsComponent implements OnInit {

  private _complexDetails: ComplexDetails;
  private _complexMIJSON: any;
  private _query: string;

  constructor(private route: ActivatedRoute,
              private complexPortalService: ComplexPortalService) {
  }

  ngOnInit(): void {
    this.route
      .params
      .subscribe(params => {
        this._query = params['id'];
        this.complexPortalService.getComplex(this._query).subscribe(
          complexDetails => this.complexDetails = complexDetails);
        this.complexPortalService.getComplexMIJSON(this._query).subscribe(
          complexMIJSON => this.complexMIJSON = complexMIJSON,);
      });
  }

  get complexDetails(): ComplexDetails {
    return this._complexDetails;
  }

  set complexDetails(value: ComplexDetails) {
    this._complexDetails = value;
  }

  get complexMIJSON(): any {
    return this._complexMIJSON;
  }

  set complexMIJSON(value: any) {
    this._complexMIJSON = value;
  }

  get query(): string {
    return this._query;
  }

  set query(value: string) {
    this._query = value;
  }
}
