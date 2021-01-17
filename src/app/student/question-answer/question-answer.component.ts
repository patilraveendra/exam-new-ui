import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from '../../shared/services/exam.service';
import { Questions } from '../../models/questions';
import { routerTransition } from '../../router.animations';
import { questions } from '../../shared/jsondata/question.json';


@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css'],
  animations: [routerTransition()]
})
export class QuestionAnswerComponent implements OnInit {
  questionSet: Questions[];
  studentAnswers: Questions[] = [];
  currentQuestion: Questions;
  currentIndex: number;
  selectedAnswer: string;
  lastQuestion: boolean;

  constructor(
    private fb: FormBuilder,
    private examservice: ExamService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getQuestionData('examId');
  }

  getQuestionData(examId: string) {

    console.log('hard coded');
    // this.questionSet = JSON.parse(JSON.stringify(questions));
    // this.currentQuestion = this.questionSet[0];
    // this.currentIndex = 0;

    this.examservice.getExamQuestions(examId).subscribe(
      (questions: Questions[]) => {
        this.questionSet = questions;
        this.currentQuestion = questions[0];
        this.currentIndex = 0;
        console.log('questions');
        console.log(this.questionSet);
      });
  }

  onNext() {
    console.log('answers');
    console.log(this.currentQuestion);
    console.log(this.selectedAnswer);

    let answer: Questions = this.currentQuestion;
    answer.selectedOption = this.selectedAnswer;
    this.studentAnswers.push(answer);

    this.selectedAnswer = null;
    if (this.currentIndex <= this.questionSet.length) {
      this.currentIndex = this.currentIndex + 1;
      this.currentQuestion = this.questionSet[this.currentIndex];
      if (this.currentIndex == this.questionSet.length) {
        this.lastQuestion = true;
        console.log('whole answers');
        console.log(this.studentAnswers);
      }
    }
  }
}
