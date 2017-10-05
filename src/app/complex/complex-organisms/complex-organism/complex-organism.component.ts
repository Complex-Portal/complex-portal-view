import {Component, Input, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from '../../../shared/google-analytics/service/google-analytics.service';
import {Router} from '@angular/router';
import {Category} from '../../../shared/google-analytics/types/category.enum';
import {environment} from '../../../../environments/environment';
import {ComplexOrganisms} from '../../shared/model/complex-organism/complex-organism.model';

@Component({
  selector: 'cp-complex-organism',
  templateUrl: './complex-organism.component.html',
  styleUrls: ['./complex-organism.component.css']
})
export class ComplexOrganismComponent implements OnInit {
  private _organism: ComplexOrganisms;

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService) {
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

}
