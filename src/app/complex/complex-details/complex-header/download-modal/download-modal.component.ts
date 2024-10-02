import {Component, computed, input, OnInit, Signal} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';

const base = environment.complex_ws_base_url;

interface Format {
  icon: string;
  name: string;
  filename: string;
  url: string;
  disabled?: boolean;
}

@Component({
  selector: 'cp-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.scss']
})
export class DownloadModalComponent implements OnInit {
  complexAC = input.required<string>();

  formats: Signal<Format[]> = computed(() => [
    {icon: '1', name: 'PSI-MI XML 2.5', filename: `${this.complexAC()}.xml`, url: `${base}/export/${this.complexAC()}?format=xml25`},
    {icon: '1', name: 'PSI-MI XML 3.0', filename: `${this.complexAC()}.xml`, url: `${base}/export/${this.complexAC()}?format=xml25`},
    {icon: 'v', name: 'ComplexTab', filename: `${this.complexAC()}.tsv`, url: `${base}/export/${this.complexAC()}?format=tsv`},
    {icon: 'J', name: 'PSI-MI JSON', filename: `${this.complexAC()}.json`, url: `${base}/export/${this.complexAC()}`},
  ]);

  download(format: Format) {
    if (!format.disabled) {
      fetch(format.url).then(t => t.blob().then((b) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(b);
        a.setAttribute('download', format.filename);
        a.click();
        a.remove();
      }));
    }
  }

  constructor(private googleAnalyticsService: AnalyticsService) {
  }

  ngOnInit() {
  }
}
