import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';
import {EuroPmcService} from './service/euro-pmc.service';
import {NotificationService} from '../../../../shared/notification/service/notification.service';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';
import {Category} from '../../../../shared/google-analytics/types/category.enum';
import {EuroPMCResponse} from './model/EuroPMCResponse';


interface Publication {
  id: string;
  title: string;
  authors: string;
  url: string;
}

@Component({
  selector: 'cp-euro-pmc-crossreferences',
  templateUrl: 'euro-pmc-crossreferences.component.html',
  styleUrls: ['euro-pmc-crossreferences.component.css']
})

export class EuroPmcCrossreferencesComponent implements OnInit {

  private _crossReferences: CrossReference[];
  private _publications: Publication[] = [];
  private _isDataLoaded = false;


  constructor(private euroPmcService: EuroPmcService, private notificationService: NotificationService,
              private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.findXRefs();
  }

  private findXRefs() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      this.euroPmcService.getPublicationInformation(this.crossReferences[i].identifier).subscribe(
        response => this.publicationFactory(this.crossReferences[i], response),
        error => {
          this._isDataLoaded = false;
          this.notificationService.onAPIRequestError('Euro PMC');
          this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.complexportal_details, error.status ? error.status : 'unknown');
        }
      );
      if (i === this.crossReferences.length - 1) {
        this._isDataLoaded = true;
      }
    }
  }

  private publicationFactory(crossReference: CrossReference, euroPmcResponse: EuroPMCResponse): void {
    this.publications.push({
      id: crossReference.identifier,
      title: euroPmcResponse.resultList.result[0].title,
      authors: euroPmcResponse.resultList.result[0].authorString,
      url: crossReference.searchURL
    });
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get publications(): Publication[] {
    return this._publications;
  }

  set publications(value: Publication[]) {
    this._publications = value;
  }

  get isDataLoaded(): boolean {
    return this._isDataLoaded;
  }

  set isDataLoaded(value: boolean) {
    this._isDataLoaded = value;
  }
}
