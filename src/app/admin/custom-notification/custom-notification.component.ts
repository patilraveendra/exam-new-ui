import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../../models/exams';
import { routerTransition } from '../../router.animations';
import { ExamService } from '../../shared/services/exam.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CustomNotification } from '../../models/notification';




@Component({
  selector: 'app-custom-notification',
  templateUrl: './custom-notification.component.html',
  styleUrls: ['./custom-notification.component.css'],
  animations: [routerTransition()]
})
export class CustomNotificationComponent implements OnInit {

  // raveendra is an object of datatype customnotification
  // customnitifcation is a class 
  notification: CustomNotification = new CustomNotification();

  form: any;

  //notification is an array of datatype cutomnotification
  notifications: CustomNotification[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private examservice: ExamService,
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

    this.notification.description = this.form.controls["notificationDescription"].value;
    this.notification.address = this.form.controls["textBox4"].value;

    console.log('single object');
    console.log(this.notification);

    this.form.reset();
    this.notifications.push(this.notification);

    console.log('array of notification');

    console.log(this.notifications);
  }

}
