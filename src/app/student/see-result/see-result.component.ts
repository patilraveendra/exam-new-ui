import { Component, Input, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { Questions } from '../../models/questions';

@Component({
  selector: 'app-see-result',
  templateUrl: './see-result.component.html',
  styleUrls: ['./see-result.component.css']
})
export class SeeResultComponent implements OnInit {

  @Input() studentAnswers: Questions[];
  rightCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.processResults();
  }

  processResults() {
    console.log('computing score');
    let numCallbackRuns = 0;
    this.studentAnswers.forEach(function (answer) {
      if (answer.rightOption == answer.selectedOption) {
        numCallbackRuns++;
      }
    });
    this.rightCount = numCallbackRuns;
  }

}
