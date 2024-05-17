import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AnalyticsService} from '../../google-analytics/service/analytics.service';
import {ComplexNavigatorComponent} from '../../../complex/complex-results/complex-navigator/complex-navigator.component';


@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) {
    toastrService.toastrConfig.closeButton = true; // displayedElements close button
    toastrService.toastrConfig.timeOut = 5000; // time to live
    toastrService.toastrConfig.preventDuplicates = true;
    toastrService.toastrConfig.progressBar = true;
    toastrService.toastrConfig.tapToDismiss = false;
    toastrService.toastrConfig.enableHtml = true;
  }

  private addSuccessNotification(successNotification: string): void {
    this.toastrService.success(successNotification);
  }

  private addErrorNotification(errorNotification: string): void {
    this.toastrService.error(errorNotification, 'Something went wrong :(');
  }

  private addAnnouncementNotification(announcementNotification: string, options): void {
    this.toastrService.info(announcementNotification, 'Just to let you know!', options);
  }

  private addRatingNotification(ratingNotification: string): void {
    this.toastrService.toastrConfig.timeOut = 10000;
    this.toastrService.info(ratingNotification);
  }

  private addHintNotification(hintNotification: string): void {
    this.toastrService.warning(hintNotification, 'Just to let you know!');
  }

  public onAPIRequestError(resource: string): void {
    this.addErrorNotification('We couldn\'t reach the ' + resource + ' webservice. ' +
      'Please try again later or contact us if issue persists!');
  }

  public onAddedComplexToBasket(id: string) {
    this.addSuccessNotification('Stored ' + id + ' in your basket!');
  }

  public onRemovedComplexFromBasket(id: string) {
    this.addSuccessNotification('Removed ' + id + ' in your basket!');
  }

  public onFeatureNotAvailableYet() {
    this.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
  }

  public rateComplexNavigator(): void {
    const ratingHtml = `
  <div class="ratingComponent">
    <div class="ratingComponentStars">
      <span class="star" [ngClass]="{'selected': selectedRating >= 1}" (click)="selectRating(1)"> &#9733; </span>
      <span class="star" [ngClass]="{'selected': selectedRating >= 2}" (click)="selectRating(2)"> &#9733; </span>
      <span class="star" [ngClass]="{'selected': selectedRating >= 3}" (click)="selectRating(3)"> &#9733; </span>
      <span class="star" [ngClass]="{'selected': selectedRating >= 4}" (click)="selectRating(4)"> &#9733; </span>
      <span class="star" [ngClass]="{'selected': selectedRating >= 5}" (click)="selectRating(5)"> &#9733; </span>
    </div>
    <input type="submit" name="submitButton" value="Submit Rating" class="button" (click)="submitRating()">
  </div>
    `;
    this.addRatingNotification(ratingHtml);
  }

  public complexNavigatorAnnouncement() {
    this.addAnnouncementNotification(
      'Try out our new display: the Complex Navigator!',
      {
        positionClass: 'toast-right-under-header'
      });
  }
}
