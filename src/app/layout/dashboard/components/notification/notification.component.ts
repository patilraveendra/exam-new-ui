import { Component, OnInit } from '@angular/core';
import { CustomNotification } from '../../../../../app/models/notification';
import { CustomNotificationService } from '../../../../../app/shared/services/custom-notification.service'


@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})  
export class NotificationComponent implements OnInit {

  notifications: CustomNotification[] = [];

  
    constructor(
        private notificationService: CustomNotificationService,
    ) {}

    ngOnInit() {
    this.getNotifications();

    }

    getNotifications() {
        console.log('notifcation service called');
        this.notificationService.getNotifcations().subscribe(
          (notifs: CustomNotification[]) => {
            console.log('get called 9494');
            this.notifications = notifs;
          });
      }
}
