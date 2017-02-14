import {Injectable} from '@angular/core';
import {ToastrService} from "toastr-ng2";

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  public addSuccessNotification(successNotification: string): void {
    // this.successNotifications.next(successNotification);
  }

  public addErrorNotification(errorNotification: string): void {
    this.toastrService.error('Something went wrong :(', errorNotification);
  }

  public addAnnouncementNotification(announcementNotification: string): void {
    // this.announcementNotifications.next(announcementNotification);
  }

  public addHintNotification(hintNotification: string): void {
    this.toastrService.warning('Hello world!', hintNotification);
  }

  public addStaticNotification(staticNotification: string): void {
    this.toastrService.success('Hello world!', staticNotification);
  }
}
