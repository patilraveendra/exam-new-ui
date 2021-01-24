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
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  animations: [routerTransition()]
})
export class AddUserComponent implements OnInit {

  categories = [
    { id :1 , name: 'Student'},
    { id :2 , name: 'Teacher'},
    
  ];
  
  constructor() { }
  submit(course) {
    console.log(course);
  }
  
  ngOnInit() {
  
  }
  }