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
    return this.isStudent.asObservable();    //go to line no 58
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

    if (user.userName !== '' && user.password !== '') {

      this.authservice.checkUserName(user).subscribe(data => {
  
        this.setUserFields(data);
        this.router.navigate(['/dashboard']);
      });

    }
  }

  setUserFields(loggedInuser: any) {

    localStorage.setItem('username', loggedInuser.name);

    if (loggedInuser.role == 'student') {
      localStorage.setItem('studentid', loggedInuser.id);
      this.loggedIn.next(true);
      this.isStudent.next(true);
      this.isTeacher.next(false);
      this.isAdmin.next(false);
    }

    if (loggedInuser.role == 'teacher') {
      localStorage.setItem('teacherid', loggedInuser.id);
      this.loggedIn.next(true);
      this.isTeacher.next(true);
      this.isStudent.next(false);
      this.isAdmin.next(false);
    }
    if (loggedInuser.role == 'admin') {
      localStorage.setItem('adminid', loggedInuser.id);
      this.loggedIn.next(true);
      this.isTeacher.next(false);
      this.isStudent.next(false);
      this.isAdmin.next(true);
    }
  }


  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
