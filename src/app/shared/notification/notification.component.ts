import {Component, OnInit} from '@angular/core';
import {NotificationService} from './service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private successNotifications: string[] = [];
  private errorNotifications: string[] = [];
  private announcementNotifications: string[] = [];
  private hintNotifications: string[] = [];
  private staticNotifications: string[] = [];

  constructor(private notificationService: NotificationService) {
    notificationService.successNotification$.subscribe(
      notification => {
        this.successNotifications.push(notification);
      });
    notificationService.errorNotification$.subscribe(
      notification => {
        console.log(notification);
      });
    notificationService.announcementNotification$.subscribe(
      notification => {
        console.log(notification);
      });
    notificationService.hintNotification$.subscribe(
      notification => {
        console.log(notification);
      });
    notificationService.staticNotification$.subscribe(
      notification => {
        this.staticNotifications.push(notification);
      });
  }

  public removeNotification(notification: string, notifications: string[]): void {
    notifications.splice(notifications.indexOf(notification), 1);
  }

  ngOnInit() {
  }

}
