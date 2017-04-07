import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {ComplexDetails} from '../shared/model/complex-details/complex-details.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {ProgressBarComponent} from "../../shared/loading-indicators/progress-bar/progress-bar.component";
import {Subscription} from "rxjs";
import {NotificationService} from "../../shared/notification/service/notification.service";
declare const expressionAtlasHeatmapHighcharts: any;
declare const $: any;

@Component({
  selector: 'app-complex-details',
  templateUrl: './complex-details.component.html',
  styleUrls: ['./complex-details.component.css']
})
export class ComplexDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  private _callSubscription: Subscription;
  private _complexDetails: ComplexDetails;
  private _complexMIJSON: any;
  private _query: string;
  private _gxa;

  constructor(private route: ActivatedRoute, private router: Router, private notificationService: NotificationService,
              private complexPortalService: ComplexPortalService) {

    if (typeof expressionAtlasHeatmapHighcharts !== 'undefined') {
      this._gxa = expressionAtlasHeatmapHighcharts;
    } else {
      this._gxa = null;
    }
  }

  ngOnInit(): void {
    this._callSubscription = this.route
      .params
      .subscribe(params => {
        this.complexPortalService.getComplex(this._query).subscribe(
          complexDetails => this.complexDetails = complexDetails,
          err => {
            this.notificationService.addErrorNotification('We couldn\'t reach the Complex Portal Webservice. Please try again later or contact us!');
            this.router.navigate(['home'])
          });
        this.complexPortalService.getComplexMIJSON(this._query).subscribe(
          complexMIJSON => this.complexMIJSON = complexMIJSON,
          err => {
            this.notificationService.addErrorNotification('We couldn\'t reach the Complex Portal Webservice. Please try again later or contact us!');
            this.router.navigate(['home'])
          });
        document.body.scrollTop = 0;
      });
  }


  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
    // $('#myStickyElement').foundation();
    $('#testDropDown').foundation();
    $(window).trigger('load.zf.sticky')
  }


  ngOnDestroy(): void {
    this._callSubscription.unsubscribe();
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

  get gxa() {
    return this._gxa;
  }

  set gxa(value) {
    this._gxa = value;
  }
}
