import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../../models/exams';
import { routerTransition } from '../../router.animations';
import { ExamService } from '../../shared/services/exam.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';


@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css'],
  animations: [routerTransition()],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS }
  ]
})
export class CreateExamComponent implements OnInit {

  newExam: Exam = new Exam();
  form: any;
  checked: any;
  examId: Number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private examservice: ExamService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      examCode: '',
      examDescription: '',
      isExamActive: '',
      examDate: '',
      examTime: '',
      examEndTime: ''

    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newExam.examDescription = this.form.controls["examDescription"].value;
    this.newExam.examCode = this.form.controls["examCode"].value;
    this.newExam.examDate = this.form.controls["examDate"].value;
    this.newExam.examTime = this.form.controls["examTime"].value;
    this.newExam.examEndTime = this.form.controls["examEndTime"].value;


    console.log('we will now create one exam');

    console.log(this.newExam);

    this.examservice.createExam(this.newExam).subscribe(data => {
      this.examId = data.examId;
      console.log('exam created');
      console.log(this.examId);
      this.router.navigateByUrl('/create-exam-question', { state: this.newExam });
    });

  }

}
