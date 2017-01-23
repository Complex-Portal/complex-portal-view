import {Injectable} from '@angular/core';
import {ToastrService} from "toastr-ng2";

@Injectable()
export class NotificationService {

  constructor(private toastrService: ToastrService) {
  }

  // getSuccessNotifications(): Observable<string> {
  //   return this.successNotifications.asObservable();
  // }
  //
  // getErrorNotification(): Observable<string> {
  //   return this.errorNotifications.asObservable();
  // }
  //
  // getAnnouncementNotifications(): Observable<string> {
  //   return this.announcementNotifications.asObservable();
  // }
  //
  // getHintNotifications(): Observable<string> {
  //   return this.hintNotifications.asObservable();
  // }
  //
  // getStaticNotifications(): Observable<string> {
  //   return this.staticNotifications.asObservable();
  // }

  public addSuccessNotification(successNotification: string): void {
    // this.successNotifications.next(successNotification);
  }

  public addErrorNotification(errorNotification: string): void {
    // this.errorNotifications.next(errorNotification);
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
