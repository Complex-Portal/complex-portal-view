import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ComplexDetails} from '../shared/model/complex-details/complex-details.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ComplexPortalService} from '../shared/service/complex-portal.service';
import {ProgressBarComponent} from '../../shared/loading-indicators/progress-bar/progress-bar.component';
import {Subscription} from 'rxjs/Subscription';
import {NotificationService} from '../../shared/notification/service/notification.service';
import {SectionService} from './shared/service/section/section.service';
import {Title} from '@angular/platform-browser';
import {GoogleAnalyticsService} from '../../shared/google-analytics/service/google-analytics.service';
import {Category} from '../../shared/google-analytics/types/category.enum';
import {DOCUMENT} from '@angular/common';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

declare const expressionAtlasHeatmapHighcharts: any;
declare const $: any;
declare const Foundation: any;

@Component({
  selector: 'cp-complex-details',
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
              private googleAnalyticsService: GoogleAnalyticsService, private complexPortalService: ComplexPortalService,
              private sectionService: SectionService, private titleService: Title) {
    this.checkIfGPAIsDefined();
  }

  ngOnInit(): void {
    this._callSubscription = this.route
      .params
      .subscribe(params => {
        this.query = params['id'];
        this.titleService.setTitle('Complex Portal - ' + this.query);
        this.requestComplex();
        this.requestComplexMIJSON();
      });
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
    $('#main-content-area').foundation();
    // This is not pretty but necessary as foundation has to re-run once all the external widgets are loaded.
    // Would be good to listen for events from every widget and re-run when all done.
    IntervalObservable.create(1000).subscribe(() => {
      $('.sticky').foundation('_calc', true);
      $('#go-to-menu').foundation('reflow');
    });
  }


  ngOnDestroy(): void {
    this._callSubscription.unsubscribe();
    this.sectionService.reset();
  }

  private checkIfGPAIsDefined() {
    // TODO: Not needed when we properly use the gxa node module and not use the backed version.
    if (typeof expressionAtlasHeatmapHighcharts !== 'undefined') {
      this._gxa = expressionAtlasHeatmapHighcharts;
    } else {
      this._gxa = null;
    }
  }

  private requestComplex() {
    this.complexPortalService.getComplex(this._query).subscribe(
      complexDetails => this.complexDetails = complexDetails,
      error => {
        this.notificationService.onAPIRequestError('Complex Portal');
        this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.complexportal_details, error.status ? error.status : 'unknown');
        this.router.navigate(['home'])
      }
    );
  }

  private requestComplexMIJSON() {
    this.complexPortalService.getComplexMIJSON(this._query).subscribe(
      complexMIJSON => this.complexMIJSON = complexMIJSON,
      error => {
        this.notificationService.onAPIRequestError('Complex Portal');
        this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.complexportal_mi, error.status ? error.status : 'unknown');
        this.router.navigate(['home'])
      }
    );
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
