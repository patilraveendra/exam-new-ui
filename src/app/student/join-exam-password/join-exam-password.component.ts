import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Exam } from '../../models/exams';
import { ExamService } from '../../shared/services/exam.service';
import { routerTransition } from '../../router.animations';
import { StudentExam } from '../../models/studentExam';


@Component({
  selector: 'app-join-exam-password',
  templateUrl: './join-exam-password.component.html',
  styleUrls: ['./join-exam-password.component.css'],
  animations: [routerTransition()]
})
export class JoinExamPasswordComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  wrongPassword: boolean;

  constructor(
    private fb: FormBuilder,
    private examservice: ExamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      examPassword: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {

      this.examservice.checkExamPassword(localStorage.getItem('examid'),
        this.form.get('examPassword').value
      )
        .subscribe(
          (exam: Exam) => {
            if (exam) {
              exam.isPasswordValid = "Y";
              this.startExam();
            } else {
              this.wrongPassword = true;
            }

          });


    }
    this.formSubmitAttempt = true;
  }

  startExam() {
    this.examservice.startExam(localStorage.getItem('examid'),localStorage.getItem('studentid')).subscribe(
      (studentExam: StudentExam) => {
        this.router.navigate(['/exam-question-answer']);
      });

  }

}
