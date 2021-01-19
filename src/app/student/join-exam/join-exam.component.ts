import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Exam } from '../../models/exams';
import { routerTransition } from '../../router.animations';
import { ExamService } from '../../shared/services/exam.service';


@Component({
  selector: 'app-join-exam',
  templateUrl: './join-exam.component.html',
  styleUrls: ['./join-exam.component.css'],
  animations: [routerTransition()]
})
export class JoinExamComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private examservice: ExamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      examCode: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {

    console.log('form submit');
    if (this.form.valid) {
      console.log('call exam service');

      this.examservice.joinExam(this.form.get('examCode').value,
        this.form.get('name').value,
        localStorage.getItem('studentid'))
        .subscribe(
          (exam: Exam) => {
            console.log("exam service success");
            localStorage.setItem('examid', exam.examId.toString());
            this.router.navigate(['/join-exam-password']);
          });
    }
    this.formSubmitAttempt = true;
  }

}
