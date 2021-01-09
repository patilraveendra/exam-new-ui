import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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


  joinExam(examId: string, studentName: string, studentId: string): Observable<Exam> {
    console.log('starting joinExam service');
    let body = {
      examid: examId,
      studentname: studentName,
      studentid: studentId
    };

    let _missionAnnouncedSource: Exam = new Exam();
    return of(_missionAnnouncedSource);

    // return this.http.post<Exam>('https://localhost:44390/api/exam/joinexam', JSON.stringify(body), httpOptions);
  }


  startExam(examId: string, password: string, studentId: string): Observable<Exam> {
    console.log('starting startExam service');
    let body = {
      examid: examId,
      password: password,
      studentid: studentId
    };

    let _missionAnnouncedSource: Exam = new Exam();
    return of(_missionAnnouncedSource);

    // return this.http.post<Exam>('https://localhost:44390/api/exam/startexam', JSON.stringify(body), httpOptions);
  }


  createExam(exam:Exam): Observable<Exam> {
    console.log('starting startExam service');
    let body = {
      examCode: exam.examCode,
      examDescription: exam.examDescription,
      examActive:exam.isActive
    };

    let _missionAnnouncedSource: Exam = new Exam();
    _missionAnnouncedSource=exam;
    _missionAnnouncedSource.examId=674;
    return of(_missionAnnouncedSource);

    // return this.http.post<Exam>('https://localhost:44390/api/exam/startexam', JSON.stringify(body), httpOptions);
  }
 
  getExamQuestions(examId: string): Observable<any[]> {
     return this.http.get<Questions[]>('https://localhost:44390/api/exam/question/1');
  }
}
