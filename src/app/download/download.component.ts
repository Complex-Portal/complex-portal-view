import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {environment} from '../../environments/environment';
import {GoogleAnalyticsService} from '../shared/google-analytics/google-analytics.service';
import {Router} from '@angular/router';
import {Action} from '../shared/google-analytics/action.enum';
import {Category} from '../shared/google-analytics/category.enum';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'cp-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private googleAnalyticsService : GoogleAnalyticsService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal - Programmatic Access');
    ProgressBarComponent.display();
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  goToComplexPSI25(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'PSIXML25');
    window.open(environment.complex_psi25, '_blank');
  }

  goToComplexPSI30(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'PSIXML30');
    window.open(environment.complex_psi30, '_blank');
  }

  goToComplexTAB(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'ComplexTAB');
    window.open(environment.complex_tab, '_blank');
  }

  goToComplexWS(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.download, 'ComplexWS');
    window.open(environment.complex_ws_base_url, '_blank');
  }

  goToComplexTabeReadMe(): void {
    this.googleAnalyticsService.fireOpenExternalLinkEvent(Category.download, 'ComplexTABReadMe');
    window.open(environment.complex_tab_readme, '_blank');
  }

  goToComplexFTPCurrent(): void {
    this.googleAnalyticsService.fireOpenExternalLinkEvent(Category.download, 'ComplexCurrentFTP');
    window.open(environment.complex_current, '_blank');
  }
}
