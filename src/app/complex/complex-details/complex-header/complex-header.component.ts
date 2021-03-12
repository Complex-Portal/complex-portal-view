import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BasketService} from '../../../shared/basket/service/basket.service';
import {NotificationService} from '../../../shared/notification/service/notification.service';
import {CrossReference} from '../../shared/model/complex-details/cross-reference.model';
import {GoogleAnalyticsService} from '../../../shared/google-analytics/service/google-analytics.service';

@Component({
  selector: 'cp-complex-header',
  templateUrl: './complex-header.component.html',
  styleUrls: ['./complex-header.component.css']
})
export class ComplexHeaderComponent implements OnInit, AfterViewInit {

  private _complexAC: string;
  private _complexName: string;
  private _complexSpecies: string;
  private _crossReferences: CrossReference[];
  private _jsonURL: string;

  constructor(private basketService: BasketService, private ga: GoogleAnalyticsService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    const urlAc = environment.complex_ws_base_url + '/details/' + this._complexAC;
    const urlComplexAc = environment.complex_ws_base_url + '/complex/' + this._complexAC;

    this._jsonURL = this._complexAC.startsWith('EBI-') ? urlAc : urlComplexAc;

  }


  ngAfterViewInit(): void {
    $('cp-complex-header').foundation();
  }

  saveComplex() {
    this.basketService.saveInBasket(this._complexName, this._complexAC, this._complexSpecies);
  }

  get complexAC(): string {
    return this._complexAC;
  }

  @Input()
  set complexAC(value: string) {
    this._complexAC = value;
  }

  get complexName(): string {
    return this._complexName;
  }

  @Input()
  set complexName(value: string) {
    this._complexName = value;
  }

  get complexSpecies(): string {
    return this._complexSpecies;
  }

  @Input()
  set complexSpecies(value: string) {
    this._complexSpecies = value;
  }

  get crossReferences(): CrossReference[] {
    return this._crossReferences;
  }

  @Input()
  set crossReferences(value: CrossReference[]) {
    this._crossReferences = value;
  }

  get jsonURL(): string {
    return this._jsonURL;
  }

  set jsonURL(value: string) {
    this._jsonURL = value;
  }

  isInBasket(): boolean {
    return this.basketService.isInBasket(this._complexAC);
  }
}
