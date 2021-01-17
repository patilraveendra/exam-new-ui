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
    private authservice:AuthServiceService
  ) { }

  login(user: User) {

    console.log('auth guard login function called');
    if (user.userName !== '' && user.password !== '') {

     this.authservice.checkUserName(user).subscribe(data => {
      console.log("user validated");
      console.log(data);
     });
      // in spring boot we will check if username and password are as saved in the database 
      //if it matches we will return true and role from spring boot 

      if (user.userName === 'student' && user.password === 'student') {
        localStorage.setItem('studentid', '35');
        this.loggedIn.next(true);
        this.isStudent.next(true);
        this.isTeacher.next(false);
        this.isAdmin.next(false);
        console.log('login student');
      }

      if (user.userName === 'teacher' && user.password === 'teacher') {
        localStorage.setItem('teacherid', '85');
        this.loggedIn.next(true);
        this.isTeacher.next(true);
        this.isStudent.next(false);
        this.isAdmin.next(false);
        console.log('login teacher');
      }
      if (user.userName === 'admin' && user.password === 'admin') {
        localStorage.setItem('adminid', '45');
        this.loggedIn.next(true);
        this.isTeacher.next(false);
        this.isStudent.next(false);
        this.isAdmin.next(true);
        console.log('login admin');
      }

      this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
