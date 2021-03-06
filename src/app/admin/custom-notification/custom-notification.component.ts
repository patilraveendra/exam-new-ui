import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../../models/exams';
import { routerTransition } from '../../router.animations';
import { ExamService } from '../../shared/services/exam.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomNotification } from '../../models/notification';
import { CustomNotificationService } from '../../shared/services/custom-notification.service';




@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.css'],
  animations: [routerTransition()]
})
export class CustomNotificationComponent implements OnInit {

  // raveendra is an object of datatype customnotification
  // customnitifcation is a class 


  form: any;

  //notification is an array of datatype cutomnotification
  notifications: CustomNotification[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private notificationService: CustomNotificationService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      isActive: '',
      notificationDescription: '',
      textBox4: ''
    });
  }

  ngOnInit(): void {
    console.log('page loaded');
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


  onSubmit() {
    console.log('save notification called');
    let notification: CustomNotification = new CustomNotification();
    notification.description = this.form.controls["notificationDescription"].value;

    this.notificationService.addNotification(notification).subscribe(

      (notify: CustomNotification) => {
        console.log('data called from 9494');
        this.form.reset();
        this.notifications.push(notification);
      });
  }

}
