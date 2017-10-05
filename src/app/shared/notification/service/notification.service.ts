import {Injectable} from '@angular/core';
import {ToastrConfig, ToastrService} from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService, private toastrConfig: ToastrConfig) {
    toastrConfig.closeButton = true; // displayedElements close button
    toastrConfig.timeOut = 5000; // time to live
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    toastrConfig.tapToDismiss = false;
    toastrConfig.enableHtml = true;
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
}
