import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ProgressBarComponent} from '../shared/loading-indicators/progress-bar/progress-bar.component';
import {Title} from '@angular/platform-browser';
import {AnalyticsService} from '../shared/google-analytics/service/analytics.service';
import {Router} from '@angular/router';
import {Category} from '../shared/google-analytics/types/category.enum';
import {environment} from '../../environments/environment';

@Component({
  selector: 'cp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private titleService: Title, private router: Router, private googleAnalyticsService: AnalyticsService) { }

  ngOnInit() {
    this.titleService.setTitle('Complex Portal');
    ProgressBarComponent.display();
    document.body.scrollTop = 0;
  }

  ngAfterViewInit(): void {
    ProgressBarComponent.hide();
  }

  /* Start COVID banner */
  search(speciesName: string) {
    this.googleAnalyticsService.fireSearchTermEvent(Category.organisms, speciesName);
    this.router.navigate(['complex/search'], {queryParams: {query: '*', species: speciesName, page: 1}});
  }

  goToComplexSARSCoV2PSI25(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML25');
    window.open(environment.complex_psi25 + 'SARS-CoV-2', '_blank');
  }

  goToComplexSARSPSI25(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML25');
    window.open(environment.complex_psi25 + 'Human_SARS_coronavirus', '_blank');
  }

  goToComplexSARSCoV2PSI30(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML30');
    window.open(environment.complex_psi30 + 'SARS-CoV-2', '_blank');
  }

  goToComplexSARSPSI30(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML30');
    window.open(environment.complex_psi30 + 'sars-cov', '_blank');
  }

  goToComplexSARSCoV2TAB(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'ComplexTAB');
    window.open(environment.complex_tab + '2697049' + '.tsv', '_blank');
  }

  goToComplexSARSTAB(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'ComplexTAB');
    window.open(environment.complex_tab + '694009' + '.tsv', '_blank');
  }
  /* End COVID banner */

}
