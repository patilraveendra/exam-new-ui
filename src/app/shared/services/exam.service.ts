import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppSettings } from '../../appsettings';
import { StudentExam } from '../../models/studentExam';
import { Exam } from '../../models/exams';
import { Questions } from '../../models/questions';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ExamService {

  constructor(private http: HttpClient,) { }

  isValidCode(id: number): boolean {
    return true;
  }

  isValidPassword(examId: string): boolean {
    return true;
  }


  joinExam(examCode: string, studentName: string, studentId: string): Observable<Exam> {
    console.log('starting joinExam service');
    let body = {
      examCode: examCode
    };

    return this.http.post<Exam>(AppSettings.API_ENDPOINT + 'joinexam', JSON.stringify(body), httpOptions);
  }

  getExams(): Observable<any[]> {
    return this.http.get<Exam[]>('https://localhost:44390/api/exam/question/1');
  }

  checkExamPassword(examId: string, password: string): Observable<Exam> {
    console.log('starting check password Exam service');
    let body = {
      examId: examId,
      examPassword: password
    };

    // let _missionAnnouncedSource: Exam = new Exam();
    // _missionAnnouncedSource.examId = parseInt(examId);
    // return of(_missionAnnouncedSource);

    return this.http.post<Exam>(AppSettings.API_ENDPOINT + 'checkExamPassword', JSON.stringify(body), httpOptions);
  }

  startExam(examId: string, studentid: string): Observable<StudentExam> {
    console.log('starting start Exam service');
    let body = {
      examid: examId,
      studentid: studentid
    };

    // let _missionAnnouncedSource: Exam = new Exam();
    // _missionAnnouncedSource.examId = parseInt(examId);
    // return of(_missionAnnouncedSource);

    return this.http.post<StudentExam>(AppSettings.API_ENDPOINT + 'startexam', JSON.stringify(body), httpOptions);
  }

  createExam(exam: Exam): Observable<Exam> {
    console.log('starting startExam service');
    let body = {
      examCode: exam.examCode,
      examDescription: exam.examDescription,
      examActive: exam.isActive
    };

    let _missionAnnouncedSource: Exam = new Exam();
    _missionAnnouncedSource = exam;
    _missionAnnouncedSource.examId = 674;
    return of(_missionAnnouncedSource);

    // return this.http.post<Exam>('https://localhost:44390/api/exam/startexam', JSON.stringify(body), httpOptions);
  }

  getExamQuestions(examId: string): Observable<any[]> {
    return this.http.get<Questions[]>(AppSettings.API_ENDPOINT + 'questions');
  }
}
