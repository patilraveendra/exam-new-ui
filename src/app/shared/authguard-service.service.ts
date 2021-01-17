import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/users';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isTeacher: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isStudent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isStudentRole() {
    return this.isStudent.asObservable();
  }

  get isTeacherRole() {
    return this.isTeacher.asObservable();
  }
  get isAdminRole() {
    return this.isAdmin.asObservable();
  }

  constructor(
    private router: Router,
    private authservice: AuthServiceService
  ) { }

  login(user: User) {

    console.log('auth guard login function called');
    if (user.userName !== '' && user.password !== '') {

      this.authservice.checkUserName(user).subscribe(data => {
        console.log("user validated");
        console.log(data);
        console.log(data.id);
        console.log(data.role);
        this.setUserFields(data);
        this.router.navigate(['/dashboard']);
      });

    }
  }

  setUserFields(loggedInuser: any) {
    if (loggedInuser.role == 'student') {
      localStorage.setItem('studentid', loggedInuser.id);
      this.loggedIn.next(true);
      this.isStudent.next(true);
      this.isTeacher.next(false);
      this.isAdmin.next(false);
      console.log('login student');
    }

    if (loggedInuser.role == 'teacher') {
      localStorage.setItem('teacherid', loggedInuser.id);
      this.loggedIn.next(true);
      this.isTeacher.next(true);
      this.isStudent.next(false);
      this.isAdmin.next(false);
      console.log('login teacher');
    }
    if (loggedInuser.role == 'admin') {
      localStorage.setItem('adminid', loggedInuser.id);
      this.loggedIn.next(true);
      this.isTeacher.next(false);
      this.isStudent.next(false);
      this.isAdmin.next(true);
      console.log('login admin');
    }
  }


  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
