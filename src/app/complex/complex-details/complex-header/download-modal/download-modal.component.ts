import {Component, computed, input, OnInit, Signal} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';

const base = environment.complex_ws_base_url;

interface Format {
  icon: string;
  name: string;
  url: string;
  disabled?: boolean;
}

@Component({
  selector: 'cp-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent implements OnInit {
  complexAC = input.required<string>();

  formats: Signal<Format[]> = computed(() => [
    {icon: '1', name: 'PSI-MI XML 2.5', url: `${base}/export/${this.complexAC()}?format=xml25`},
    {icon: '1', name: 'PSI-MI XML 3.0', url: `${base}/export/${this.complexAC()}?format=xml25`},
    {icon: 'v', name: 'ComplexTab', url: `${base}/export/${this.complexAC()}?format=tab`, disabled: true},
    {icon: 'J', name: 'PSI-MI JSON', url: `${base}/export/${this.complexAC()}`},
  ]);

  constructor(private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
  }
}
