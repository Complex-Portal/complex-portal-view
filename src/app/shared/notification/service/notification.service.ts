import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';


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

  private addComplexNavigatorAnnouncementNotification(announcement: string) {
    return this.toastrService.info(announcement, null, {
      disableTimeOut: true,
      closeButton: true,
      progressBar: false,
      positionClass: 'toast-right-under-header'
    });
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

  public complexNavigatorAnnouncement() {
    return this.addComplexNavigatorAnnouncementNotification(
      'Try out our new display: \n ' +
      'the Complex Navigator!');
  }

  public closeAnnouncement(toastId: number): void {
    this.toastrService.clear(toastId);
  }
}
