import {Component, OnInit, AfterViewInit} from '@angular/core';
import {NotificationService} from '../../shared/notification/service/notification.service';

declare var $: any;

@Component({
  selector: 'app-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements AfterViewInit {

  constructor(private notificationService: NotificationService) {
  }

  ngAfterViewInit(): void {
    $('app-tile-menu').foundation();
  }

  featureNotAvailableYet() {
    this.notificationService.addHintNotification('This feature is not available yet. But it is coming soon! :-)');
  }

}
