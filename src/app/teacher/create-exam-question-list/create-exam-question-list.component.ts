import { Component, Input, OnInit } from '@angular/core';
import { Questions } from '../../models/questions';

@Component({
  selector: 'app-create-exam-question-list',
  templateUrl: './create-exam-question-list.component.html',
  styleUrls: ['./create-exam-question-list.component.css']
})
export class CreateExamQuestionListComponent implements OnInit {

  @Input() questions:Questions;

  constructor() { }

  ngOnInit(): void {
  }

}
