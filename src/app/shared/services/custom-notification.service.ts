import { Injectable } from '@angular/core';
import { CustomNotification } from '../../models/notification';

@Injectable({
  providedIn: 'root'
})
export class CustomNotificationService {

  constructor() { }

  addNotification(notificationToInsert: CustomNotification) {
    console.log('I am in service');
    console.log(notificationToInsert);

  }
}
