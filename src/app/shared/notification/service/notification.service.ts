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

  public addStaticNotification(staticNotification: string): void {
    this.toastrService.success('Hello world!', staticNotification);
  }

  public followOnTwitter(): void {
    const CP_TWITTER_REMINDER = 'cp_twitter_reminder';
    if (LocalStorageService.getLocalStorage(CP_TWITTER_REMINDER) == null) {
      const context = this;
      setTimeout(function () {
        context.toastrService.info('Stay in touch and follow <b><a href="//twitter.com/complexportal" target="_blank">@complexportal</a></b> on Twitter!', 'Follow us on Twitter!');
        LocalStorageService.saveInLocalStorage(CP_TWITTER_REMINDER, true)
      }, 30000)
    }
  }
}
