import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppSettings } from '../../appsettings';
import { StudentExam } from '../../models/studentExam';
import { Exam } from '../../models/exams';
import { Questions } from '../../models/questions';
import { DatePipe } from '@angular/common'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ExamService {

  constructor(private http: HttpClient,
    public datepipe: DatePipe
  ) { }

  isValidCode(id: number): boolean {
    return true;
  }

  isValidPassword(examId: string): boolean {
    return true;
  }


  joinExam(examCode: string, studentName: string, studentId: string): Observable<Exam> {
    let body = {
      examCode: examCode
    };

    return this.http.post<Exam>(AppSettings.API_ENDPOINT + 'joinexam', JSON.stringify(body), httpOptions);
  }

  getExams(): Observable<any[]> {
    return this.http.get<Exam[]>(AppSettings.API_ENDPOINT + 'exams');
    //to get exams
  }

  checkExamPassword(examId: string, password: string): Observable<Exam> {
    let body = {
      examId: examId,
      examPassword: password
    };

     //to send examid and password

    return this.http.post<Exam>(AppSettings.API_ENDPOINT + 'checkExamPassword', JSON.stringify(body), httpOptions);
  }

  startExam(examId: string, studentid: string): Observable<StudentExam> {
    let body = {
      examid: examId,
      studentid: studentid
    };
    //send examid and password 

    // let _missionAnnouncedSource: Exam = new Exam();
    // _missionAnnouncedSource.examId = parseInt(examId);
    // return of(_missionAnnouncedSource);

    return this.http.post<StudentExam>(AppSettings.API_ENDPOINT + 'startexam', JSON.stringify(body), httpOptions);
  }

  createExam(exam: Exam): Observable<Exam> {



    let body = {
      examCode: exam.examCode,
      examDescription: exam.examDescription,
      examActive: exam.isActive,
      examPassword: exam.examPassword,
      examDate: exam.examDateAsString,
      examTime: exam.examTimeAsString,
      examEndTime: exam.examEndTimeAsString

    };
    //send exam data 

    return this.http.post<Exam>(AppSettings.API_ENDPOINT + 'createexam', JSON.stringify(body), httpOptions);
  }


  createQuestion(question: Questions): Observable<Questions> {
    let body = {
      "question": question.question,
      "optionA": question.optionA,
      "optionB": question.optionB,
      "optionC": question.optionC,
      "optionD": question.optionD,
      "rightOption": question.rightOption,
      "examid": question.examId
    };
            //send question data with options
    return this.http.post<Questions>(AppSettings.API_ENDPOINT + 'createquestion', JSON.stringify(body), httpOptions);
  }


  getExamQuestions(examId: string): Observable<Questions[]> {

    let body = {
      "examid": examId
    };

    return this.http.post<Questions[]>(AppSettings.API_ENDPOINT + 'questionsofexam', JSON.stringify(body), httpOptions);
  }

  saveStudentsAnswer(question: Questions): Observable<Questions> {


    let body = {
      "examid": localStorage.getItem('examid'),
      "questionid": question.id,
      "rightoption": question.rightOption,
      "selectedoption": question.selectedOption,
      "studentid": localStorage.getItem('studentid')
    };

    return this.http.post<Questions>(AppSettings.API_ENDPOINT + 'savequestionanswer', JSON.stringify(body), httpOptions);
  }




  // getExamQuestions(examId: string): Observable<any[]> {
  //   return this.http.get<Questions[]>(AppSettings.API_ENDPOINT + 'questionsofexam');
  // }

  getStudentAnswers(examId: string): Observable<any[]> {
    return this.http.get<Questions[]>(AppSettings.API_ENDPOINT + 'getallanswersofexambystudent/' + examId);
  }


}
