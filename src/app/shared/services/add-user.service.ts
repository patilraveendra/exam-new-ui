//import { Users } from './../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../../appsettings';
import { User } from '../../models/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
}) 
export class AddUserService {

  constructor(private http: HttpClient,) { }


  getUsers(): Observable<any[]> {
    return this.http.get<User[]>(AppSettings.API_ENDPOINT + 'users');
  }
  //to get user

  addUser(userToAdd: any): Observable<User> {

    let body = {
      "userId": userToAdd.name,

      "name": userToAdd.username,

      "password": userToAdd.password,

      "role": userToAdd.category

    };

    return this.http.post<User>(AppSettings.API_ENDPOINT + 'addUser', JSON.stringify(body), httpOptions);

    //to add users
  }
}
