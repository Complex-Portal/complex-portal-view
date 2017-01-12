import {Component, OnInit} from '@angular/core';
import {NotificationService} from "./shared/notification/service/notification.service";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private notificationService : NotificationService) {
    notificationService.successNotification$.subscribe(
      notification => {
        console.log(notification);
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
        console.log(notification);
      });
  }

  ngOnInit(): void {
  }
}
