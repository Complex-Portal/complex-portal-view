import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';
import {OlsService} from '../../../../shared/ols/service/ols.service';
import {NotificationService} from '../../../../shared/notification/service/notification.service';
import {GoogleAnalyticsService} from '../../../../shared/google-analytics/service/google-analytics.service';
import {Category} from '../../../../shared/google-analytics/types/category.enum';

@Component({
  selector: 'cp-efo-crossreferences',
  templateUrl: './efo-crossreferences.component.html',
  styleUrls: ['./efo-crossreferences.component.css']
})
export class EfoCrossreferencesComponent implements OnInit {
  private _crossReferences: CrossReference[];
  private _displayedElements = 5;

  constructor(private olsService: OlsService, private notificationService: NotificationService,
              private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit() {
    this.findXRefs();
  }

  /**
   * The OLS WS provides us some description to the found EFO and Orphanet XRefs.
   */
  private findXRefs() {
    for (let i = 0; i < this._crossReferences.length; i++) {
      if (this.crossReferences[i].identifier.split(':')[0] === 'EFO') {
        this.olsService.getEfoName(this.crossReferences[i].identifier).subscribe(
          response => {
            this._crossReferences[i].description = response._embedded.terms[0].label
          },
          error => {
            this.notificationService.onAPIRequestError('OLS');
            this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.ols_efo, error.status ? error.status : 'unknown');
          });
      } else if (this.crossReferences[i].identifier.split(':')[0] === 'Orphanet') {
        this.olsService.getOrphaNetName(this.crossReferences[i].identifier).subscribe(
          response => {
            this._crossReferences[i].description = response._embedded.terms[0].label
          },
          error => {
            this.notificationService.onAPIRequestError('OLS');
            this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.ols_orphanet, error.status ? error.status : 'unknown');
          });
      }
    }
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get displayedElements(): number {
    return this._displayedElements;
  }

  set displayedElements(value: number) {
    this._displayedElements = value;
  }
}
