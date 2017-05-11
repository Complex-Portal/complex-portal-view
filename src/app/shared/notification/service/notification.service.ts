import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  public addSuccessNotification(successNotification: string): void {
    this.toastrService.success(successNotification);
  }

  public addErrorNotification(errorNotification: string): void {
    this.toastrService.error('Something went wrong :(', errorNotification);
  }

  public addAnnouncementNotification(announcementNotification: string, options): void {
    this.toastrService.info('Just to let you know!', announcementNotification, options);
  }

  public addHintNotification(hintNotification: string): void {
    this.toastrService.warning('Just to let you know!', hintNotification);
  }

  public addStaticNotification(staticNotification: string): void {
    this.toastrService.success('Hello world!', staticNotification);
  }
}
