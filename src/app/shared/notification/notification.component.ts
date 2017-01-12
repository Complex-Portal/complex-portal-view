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
    notificationService.getSuccessNotifications().subscribe(
      notification => {
        this.successNotifications.push(notification);
      });
    notificationService.getErrorNotification().subscribe(
      notification => {
        console.log(notification);
      });
    notificationService.getAnnouncementNotifications().subscribe(
      notification => {
        console.log(notification);
      });
    notificationService.getHintNotifications().subscribe(
      notification => {
        console.log(notification);
      });
    notificationService.getStaticNotifications().subscribe(
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
