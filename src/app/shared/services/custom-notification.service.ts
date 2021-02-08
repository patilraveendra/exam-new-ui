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

    console.log('add service called');
    let body = {
      
      "description": notificationToInsert.description
    };

    return this.http.post<CustomNotification>(AppSettings.API_ENDPOINT + 'saveNotification', JSON.stringify(body), httpOptions);
  }
  //post is used for adding notification



  getNotifcations(): Observable<any[]> {
    console.log('service call to GET');
    return this.http.get<CustomNotification[]>(AppSettings.API_ENDPOINT + 'notification');
  }
   //get is used for getting list of all notifications

}
