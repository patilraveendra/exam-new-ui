import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../../models/exams';
import { Questions } from '../../models/questions';
import { routerTransition } from '../../router.animations';
import { ExamService } from '../../shared/services/exam.service';

@Component({
  selector: 'app-create-exam-question-add',
  templateUrl: './create-exam-question-add.component.html',
  styleUrls: ['./create-exam-question-add.component.css'],
  animations: [routerTransition()],
})
export class CreateExamQuestionAddComponent implements OnInit {

  exam: Exam;
  form: any;
  questions: Questions[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private examservice: ExamService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      rightOption: ''

    });
  }

  ngOnInit(): void {

    this.exam = history.state;
  }

  redirectToList(){
    this.router.navigate(['/exam-list']);
  }

  onSubmit() {
    let addedQuestion: Questions = {
      selectedOption: '',
      examId: this.exam.examId,
      question: this.form.controls["question"].value,
      optionA: this.form.controls["optionA"].value,
      optionB: this.form.controls["optionB"].value,
      optionC: this.form.controls["optionC"].value,
      optionD: this.form.controls["optionD"].value,
      rightOption: this.form.controls["rightOption"].value,
    }


    this.examservice.createQuestion(addedQuestion).subscribe(data => {
     
      this.questions.push(addedQuestion);
      this.form.reset();
    });


  }

}
