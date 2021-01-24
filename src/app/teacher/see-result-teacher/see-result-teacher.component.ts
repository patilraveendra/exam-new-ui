import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../shared/services/exam.service';
import { studentresults } from '../../models/studentresult';
import { StudentAnswer } from '../../models/StudentAnswer';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-see-result-teacher',
  templateUrl: './see-result-teacher.component.html',
  styleUrls: ['./see-result-teacher.component.css'],
  animations: [routerTransition()]
})
export class SeeResultTeacherComponent implements OnInit {
  studentanswers: StudentAnswer[];
  sturesult: studentresults[] = [];


  constructor(
    private examservice: ExamService,

  ) { }

  ngOnInit(): void {
    this.getResultData();
  }

  getResultData() {
    this.examservice.getStudentAnswers(13).subscribe((studentanswers: StudentAnswer[]) => {
      this.studentanswers = studentanswers;
      console.log('all answers for the exam id passed from dropdown');
      console.log(studentanswers);

      this.getResults();
    });
  }



  getResults() {

    const uniqueStudents = [...new Set(this.studentanswers.map(item => item.studentid))];

    let uniqueStudentsResult: any;

    uniqueStudents.forEach(element => {
      let sturesultsingle: studentresults = new studentresults();
      let numCallbackRuns = 0;
      uniqueStudentsResult = this.studentanswers.filter(
        answer => answer.studentid === element);

      console.log('group by student');
      console.log(uniqueStudentsResult);

      uniqueStudentsResult.forEach(function (answered) {
        console.log('answered');
        console.log(answered);
        if (answered.rightoption == answered.selectedoption) {
          numCallbackRuns = numCallbackRuns + 1;
        }
      });

      sturesultsingle.studentId = element;
      sturesultsingle.correctAnswer = numCallbackRuns;
      sturesultsingle.totalQuestions = uniqueStudentsResult.length;

      this.sturesult.push(sturesultsingle);

    });

    console.log('sturesult');
    console.log(this.sturesult);

  }



}
