import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Category} from '../../../../shared/google-analytics/types/category.enum';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';

@Component({
  selector: 'cp-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent implements OnInit {
  private _complexAC: string;

  constructor(private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
  }


  goToComplexWSJsonFormat(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.details, 'ComplexWS');

    const complexURLjson = environment.complex_ws_base_url + '/export/' + this._complexAC;
    window.open(complexURLjson, '_blank');
  }

  goToComplexWSXml25Format(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.details, 'ComplexWS');

    const complexURLxml25 = environment.complex_ws_base_url + '/export/' + this._complexAC + '?format=xml25';
    window.open(complexURLxml25, '_blank');
  }

  goToComplexWSComplexTabFormat(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.details, 'ComplexWS');

    const complexURLxml25 = environment.complex_ws_base_url + '/export/' + this._complexAC + '?format=tsv';
    window.open(complexURLxml25, '_blank');
  }

  goToComplexWSXml30Format(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.details, 'ComplexWS');

    const complexURLxml30 = environment.complex_ws_base_url + '/export/' + this._complexAC + '?format=xml30';
    window.open(complexURLxml30, '_blank');
  }

  get complexAC(): string {
    return this._complexAC;
  }

  @Input()
  set complexAC(value: string) {
    this._complexAC = value;
  }
}
