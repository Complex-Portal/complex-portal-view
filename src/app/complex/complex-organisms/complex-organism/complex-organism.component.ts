import {Component, Input, OnInit} from '@angular/core';
import {GoogleAnalyticsService} from '../../../shared/google-analytics/google-analytics.service';
import {Router} from '@angular/router';
import {Action} from '../../../shared/google-analytics/action.enum';
import {Category} from '../../../shared/google-analytics/category.enum';
import {NotificationService} from '../../../shared/notification/service/notification.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'cp-complex-organism',
  templateUrl: './complex-organism.component.html',
  styleUrls: ['./complex-organism.component.css']
})
export class ComplexOrganismComponent implements OnInit {
  private _name: string;
  private _symbol: string;
  private _count: string;
  private _psi25: string;
  private _psi30: string;
  private _complextab: string;

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService, private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  search(specieName: string) {
    this.googleAnalyticsService.fireSearchTermEvent(Category.organisms, specieName);
    this.router.navigate(['complex/search'], {queryParams: {query: '*', species: specieName, page: 1}});
  }

  get name(): string {
    return this._name;
  }

  @Input()
  set name(value: string) {
    this._name = value;
  }

  get symbol(): string {
    return this._symbol;
  }

  @Input()
  set symbol(value: string) {
    this._symbol = value;
  }

  get count(): string {
    return this._count;
  }

  @Input()
  set count(value: string) {
    this._count = value;
  }

  get psi25(): string {
    return this._psi25;
  }

  @Input()
  set psi25(value: string) {
    this._psi25 = value;
  }

  get psi30(): string {
    return this._psi30;
  }

  @Input()
  set psi30(value: string) {
    this._psi30 = value;
  }

  get complextab(): string {
    return this._complextab;
  }

  @Input()
  set complextab(value: string) {
    this._complextab = value;
  }

  goToComplexPSI25(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML25');
    window.open(environment.complex_psi25 + this.psi25, '_blank');
  }

  goToComplexPSI30(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'PSIXML30');
    window.open(environment.complex_psi30 + this.psi30, '_blank');
  }

  goToComplexTAB(): void {
    this.googleAnalyticsService.fireDownloadResourceEvent(Category.organisms, 'ComplexTAB');
    window.open(environment.complex_tab + this.complextab + '.tsv', '_blank');
  }

}
