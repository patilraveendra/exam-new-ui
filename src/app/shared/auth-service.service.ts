import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppSettings } from '../appsettings';
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

  checkUserName(user: User): Observable<any> {
    let body = {
      userId: user.userName,
      password: user.password
    };

    return this.http.post<any>(AppSettings.API_ENDPOINT + 'authenticateUser', JSON.stringify(body), httpOptions);

  };
}
