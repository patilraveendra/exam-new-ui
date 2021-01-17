import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/users';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,
  ) {

  }

  checkUserName(user: User): Observable<User> {
    let body = {
      username: user.userName,
      password: user.password
    };

    let _missionAnnouncedSource: User = new User();
    _missionAnnouncedSource = user;
    _missionAnnouncedSource.role = "teacher";
    return of(_missionAnnouncedSource);

    // return this.http.post<User>('https://localhost:44390/api/rack', JSON.stringify(body), httpOptions);

  };
}
