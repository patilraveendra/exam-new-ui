import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../shared/services/exam.service';
import { studentresults } from '../../models/studentresult';
import { StudentAnswer } from '../../models/StudentAnswer';

import { routerTransition } from '../../router.animations';
import { Exam } from '../../models/exams';
import { AddUserService } from '../../shared/services/add-user.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-see-result-teacher',
  templateUrl: './see-result-teacher.component.html',
  styleUrls: ['./see-result-teacher.component.css'],
  animations: [routerTransition()]
})
export class SeeResultTeacherComponent implements OnInit {
  studentanswers: StudentAnswer[];
  sturesult: studentresults[] = [];
  exams: Exam[];
  selectedExam: string;
  users: User[];

  constructor(
    private examservice: ExamService,
    private userService: AddUserService

  ) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });


    this.getExams();

  }


  examChanged() {
    this.sturesult = [];
    this.getResultData();

  }


  getExams() {
    this.examservice.getExams().subscribe((exams: Exam[]) => {
      this.exams = exams;
    });
  }

  getResultData() {

    this.examservice.getStudentAnswers(this.selectedExam).subscribe((studentanswers: StudentAnswer[]) => {
      this.studentanswers = studentanswers;

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



      uniqueStudentsResult.forEach(function (answered) {

        if (answered.rightoption == answered.selectedoption) {
          numCallbackRuns = numCallbackRuns + 1;
        }
      });

      const studentname = this.users.filter(user => user.id.toString() == element.toString())

      sturesultsingle.studentName = studentname[0].name;
      sturesultsingle.studentId = element;
      sturesultsingle.correctAnswer = numCallbackRuns;
      sturesultsingle.totalQuestions = uniqueStudentsResult.length;

      this.sturesult.push(sturesultsingle);

    });



  }



}
