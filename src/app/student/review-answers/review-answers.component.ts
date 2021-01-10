import { Component, Input, OnInit } from '@angular/core';
import { Questions } from '../../models/questions';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.css']
})
export class ReviewAnswersComponent implements OnInit {

  @Input() studentAnswers: Questions[];
  answerSubmitted: boolean;

  constructor() { }

  ngOnInit(): void {
    this.answerSubmitted = false; 
  }

  submitAnswer() {
    this.answerSubmitted = true;
    console.log('answer submitted');
  }
}
