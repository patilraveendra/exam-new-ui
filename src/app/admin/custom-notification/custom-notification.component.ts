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
  }

  onSubmit() {
    let notification: CustomNotification = new CustomNotification();
    notification.description = this.form.controls["notificationDescription"].value;
    notification.address = this.form.controls["textBox4"].value;


    console.log('single object');
    console.log(notification);

    this.notificationService.addNotification(notification);
    
    this.form.reset();
    this.notifications.push(notification);

    console.log('array of notification');

    console.log(this.notifications);
  }

}
