import {Component, Inject, Input, OnInit, input } from '@angular/core';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {Router} from '@angular/router';
import {Category} from '../../../shared/google-analytics/types/category.enum';
import {environment} from '../../../../environments/environment';
import {ComplexOrganisms} from '../../shared/model/complex-organism/complex-organism.model';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'cp-complex-organism',
  templateUrl: './complex-organism.component.html',
  styleUrls: ['./complex-organism.component.scss']
})
export class ComplexOrganismComponent implements OnInit {
  private _organism: ComplexOrganisms;

  constructor(private router: Router, private googleAnalyticsService: AnalyticsService, @Inject(APP_BASE_HREF) private _baseHref: string) {
  }

  ngOnInit() {
  }

  search(specieName: string) {
    this.googleAnalyticsService.fireSearchTermEvent(Category.organisms, specieName);
    this.router.navigate(['complex/search'], {queryParams: {query: '*', species: specieName, page: 1}});
  }

  get organism(): ComplexOrganisms {
    return this._organism;
  }

  @Input()
  set organism(value: ComplexOrganisms) {
    this._organism = value;
  }

  goToComplexPSI25(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML25');
    window.open(environment.complex_psi25 + this.organism.psi25, '_blank');
  }

  goToComplexPSI30(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML30');
    window.open(environment.complex_psi30 + this.organism.psi30, '_blank');
  }

  goToComplexTAB(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'ComplexTAB');
    window.open(environment.complex_tab + this.organism.complextab + '.tsv', '_blank');
  }

  get maskStyle(): string {
    return `mask: url(${this._baseHref}${this._organism.symbol}) no-repeat center; -webkit-mask: url(${this._baseHref}${this._organism.symbol}) no-repeat center`;
  }

}
