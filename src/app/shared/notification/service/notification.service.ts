import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from '../../local-storage/local-storage.service';

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  public addSuccessNotification(successNotification: string): void {
    this.toastrService.success(successNotification);
  }

  public addErrorNotification(errorNotification: string): void {
    this.toastrService.error(errorNotification, 'Something went wrong :(');
  }

  public addAnnouncementNotification(announcementNotification: string, options): void {
    this.toastrService.info(announcementNotification, 'Just to let you know!', options);
  }

  public addHintNotification(hintNotification: string): void {
    this.toastrService.warning(hintNotification, 'Just to let you know!');
  }

  // public addStaticNotification(staticNotification: string): void {
  //   this.toastrService.success('Hello world!', staticNotification);
  // }

}
