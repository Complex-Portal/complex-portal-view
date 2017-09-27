import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from '../../../shared/model/complex-details/cross-reference.model';
import {EuroPmcService} from './service/euro-pmc.service';
import {NotificationService} from '../../../../shared/notification/service/notification.service';
import {GoogleAnalyticsService} from '../../../../shared/google-analytics/service/google-analytics.service';
import {Category} from '../../../../shared/google-analytics/category.enum';


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
              private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.crossReferences.length; i++) {
      this.euroPmcService.getPublicationInformation(this.crossReferences[i].identifier).subscribe(
        euroPmcResponse => this.publicationFactory(this.crossReferences[i], euroPmcResponse),
        error => this.onError(error)
      );
      if (i === this.crossReferences.length - 1) {
        this._isDataLoaded = true;
      }
    }
  }

  private onError(error: any) {
    this._isDataLoaded = false;
    if (error.status) {
      this.notificationService.addErrorNotification('Error whilst retrieving data from Euro PMC. ' +
        'Please let us know if error persists.');
      this.googleAnalyticsService.fireAPIRequestErrorEvent(Category.europepmc, error.status);
    }
  }

  private publicationFactory(crossReference: CrossReference, euroPmcResponse: any): void {
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
