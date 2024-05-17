import {Component, Input} from '@angular/core';
import {ComplexSearchResult} from '../../shared/model/complex-results/complex-search.model';
import {Interactor} from '../../shared/model/complex-results/interactor.model';
import {AnalyticsService} from '../../../shared/google-analytics/service/analytics.service';

@Component({
  selector: 'cp-complex-navigator',
  templateUrl: './complex-navigator.component.html',
  styleUrls: ['./complex-navigator.component.css']
})

export class ComplexNavigatorComponent {
  @Input() complexSearch: ComplexSearchResult;
  @Input() interactors: Interactor[];
  interactorsSorting = 'Occurrence';
  organismIconDisplay = true;
  interactorTypeDisplay = true;
  IDDisplay = true;
  selectedRating: number;

  constructor(private analyticsService: AnalyticsService) {
  }

  selectRating(rating: number) {
    this.selectedRating = rating;
    console.log(`Selected rating: ${rating}`);
  }

  submitRating() {
    if (this.selectedRating !== null) {
      this.analyticsService.rateComplexNavigator(this.selectedRating.toString());
      console.log(`Submitting rating: ${this.selectedRating}`);
    } else {
      console.log('No rating selected');
    }
  }
}
