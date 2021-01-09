import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isTeacher: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isStudent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isStudentRole() {
    return this.isStudent.asObservable();
  }

  get isTeacherRole() {
    return this.isTeacher.asObservable();
  }

  constructor(
    private router: Router
  ) { }

  login(user: User) {

    console.log('auth guard login function called');
    if (user.userName !== '' && user.password !== '') {

      if (user.userName === 'student' && user.password === 'student') {
        localStorage.setItem('studentid', '35');
        this.loggedIn.next(true);
        this.isStudent.next(true);
        this.isTeacher.next(false);
        console.log('login student');
      }

      if (user.userName === 'teacher' && user.password === 'teacher') {
        localStorage.setItem('teacherid', '85');
        this.loggedIn.next(true);
        this.isTeacher.next(true);
        this.isStudent.next(false);
        console.log('login teacher');
      }

      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
