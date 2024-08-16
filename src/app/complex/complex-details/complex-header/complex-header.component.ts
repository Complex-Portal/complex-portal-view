import {AfterViewInit, Component, OnInit, input } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BasketService} from '../../../shared/basket/service/basket.service';
import {NotificationService} from '../../../shared/notification/service/notification.service';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';
import {ComplexDetails} from '../../shared/model/complex-details/complex-details.model';

@Component({
  selector: 'cp-complex-header',
  templateUrl: './complex-header.component.html',
  styleUrls: ['./complex-header.component.css']
})
export class ComplexHeaderComponent implements OnInit, AfterViewInit {

  complex = input<ComplexDetails>();
  private _jsonURL: string;

  constructor(private basketService: BasketService, private ga: AnalyticsService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    const urlAc = environment.complex_ws_base_url + '/details/' + this.complex().complexAc;
    const urlComplexAc = environment.complex_ws_base_url + '/complex/' + this.complex().complexAc;

    this._jsonURL = this.complex().complexAc.startsWith('EBI-') ? urlAc : urlComplexAc;

  }


  ngAfterViewInit(): void {
    $('cp-complex-header').foundation();
  }

  saveComplex() {
    this.basketService.saveInBasket(this.complex());
  }

  get jsonURL(): string {
    return this._jsonURL;
  }

  set jsonURL(value: string) {
    this._jsonURL = value;
  }

  isInBasket(): boolean {
    return this.basketService.isInBasket(this.complex().complexAc);
  }

  removeComplexFromBasket() {
    this.basketService.deleteFromBasket(this.complex().complexAc);
  }

  toggleBasket() {
    if (this.isInBasket()) {
      this.removeComplexFromBasket();
    } else {
      this.saveComplex();
    }
  }
}
