import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class NotificationService {

  private successNotifications = new Subject<string>();
  private errorNotifications = new Subject<string>();
  private announcementNotifications = new Subject<string>();
  private hintNotifications = new Subject<string>();
  private staticNotifications = new Subject<string>();


  constructor() {
  }

  successNotification$ = this.successNotifications.asObservable();
  errorNotification$ = this.errorNotifications.asObservable();
  announcementNotification$ = this.announcementNotifications.asObservable();
  hintNotification$ = this.hintNotifications.asObservable();
  staticNotification$ = this.staticNotifications.asObservable();


  public addSuccessNotification(successNotification: string): void {
    this.successNotifications.next(successNotification);
  }

  public addErrorNotification(errorNotification: string): void {
    this.errorNotifications.next(errorNotification);
  }

  public addAnnouncementNotification(announcementNotification: string): void {
    this.announcementNotifications.next(announcementNotification);
  }

  public addHintNotification(hintNotification: string): void {
    this.hintNotifications.next(hintNotification);
  }

  public addStaticNotification(staticNotification: string): void {
    this.staticNotifications.next(staticNotification);
  }
}
