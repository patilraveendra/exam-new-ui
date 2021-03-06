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
import { AddUserService } from '../../shared/services/add-user.service';
import { User } from '../../models/users';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  animations: [routerTransition()]
})
export class AddUserComponent implements OnInit {

  success = false;

  categories = [
    { id: 'student', name: 'Student' },
    { id: 'teacher', name: 'Teacher' },

  ];

  constructor(
    private route: ActivatedRoute,
    private userService: AddUserService,
    private router: Router,
  ) { }

  submit(course) {

    this.userService.addUser(course).subscribe(
      (user: User) => {
        this.success = true;
      });
  }

  ngOnInit() {

  }
}