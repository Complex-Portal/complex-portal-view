import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../../../../shared/google-analytics/service/analytics.service';

const COMPLEX_NAVIGATOR_RATING = 'already_rated';

@Component({
  selector: 'cp-complex-navigator-rating',
  templateUrl: './complex-navigator-rating.component.html',
  styleUrls: ['./complex-navigator-rating.component.css']
})
export class ComplexNavigatorRatingComponent implements OnInit {
  selectedRating: number;
  hidden = false;

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    this.hidden = localStorage.getItem(COMPLEX_NAVIGATOR_RATING) === 'true' || false;
  }

  selectRating(rating: number) {
    this.selectedRating = rating;
    // console.log(`Selected rating: ${rating}`);
    this.analyticsService.rateComplexNavigator(this.selectedRating);
    localStorage.setItem(COMPLEX_NAVIGATOR_RATING, 'true');
    setTimeout(() => this.hidden = true, 2000);
  }
}
