import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Category} from '../../../../shared/google-analytics/types/category.enum';
import {GoogleAnalyticsService} from '../../../../shared/google-analytics/service/google-analytics.service';

@Component({
  selector: 'cp-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent implements OnInit {
  private _complexAC: string;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit() {
  }


  goToComplexWS(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.details, 'ComplexWS');
    window.open(environment.complex_ws_base_url + '/details/' + this._complexAC, '_blank');
  }

  get complexAC(): string {
    return this._complexAC;
  }

  @Input()
  set complexAC(value: string) {
    this._complexAC = value;
  }
}
