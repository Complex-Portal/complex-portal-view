import {Component} from '@angular/core';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';

@Component({
  selector: 'cp-complex-navigator-rating',
  templateUrl: './complex-navigator-rating.component.html',
  styleUrls: ['./complex-navigator-rating.component.css']
})
export class ComplexNavigatorRatingComponent {
  selectedRating: number;
  visible = true;

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

  ratingVisibility() {
    this.visible = false;
  }
}
