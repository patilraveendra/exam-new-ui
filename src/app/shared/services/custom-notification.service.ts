import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../../appsettings';
import { CustomNotification } from '../../models/notification';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomNotificationService {

  constructor(private http: HttpClient,) { }

  addNotification(notificationToInsert: CustomNotification): Observable<CustomNotification> {

    let body = {
      "description": notificationToInsert.description
    };

    return this.http.post<CustomNotification>(AppSettings.API_ENDPOINT + 'saveNotification', JSON.stringify(body), httpOptions);
  }


  getNotifcations(): Observable<any[]> {
    return this.http.get<CustomNotification[]>(AppSettings.API_ENDPOINT + 'notification');
  }


}
