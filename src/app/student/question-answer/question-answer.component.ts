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
  timeup: boolean;


  constructor(
    private fb: FormBuilder,
    private examservice: ExamService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.getQuestionData(localStorage.getItem('examid'));
  }

  getQuestionData(examId: string) {


    this.examservice.getExamQuestions(examId).subscribe(
      (questions: Questions[]) => {
        this.questionSet = questions;
        this.currentQuestion = questions[0];
        this.currentIndex = 0;
      });

  }

  onNext() {

    let answer: Questions = this.currentQuestion;
    answer.selectedOption = this.selectedAnswer;

    this.examservice.saveStudentsAnswer(answer).subscribe(
      (questions: Questions) => {
        this.studentAnswers.push(answer);

        this.selectedAnswer = null;
        if (this.currentIndex <= this.questionSet.length) {
          this.currentIndex = this.currentIndex + 1;
          this.currentQuestion = this.questionSet[this.currentIndex];
          if (this.currentIndex == this.questionSet.length) {
            this.lastQuestion = true;
          }
        }
      });
  }

  handleEvent($event) {
    if ($event.left === 0) {
      this.timeup = true;
    }
    console.log($event.left);
  }
}
