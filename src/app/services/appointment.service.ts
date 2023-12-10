// src/app/appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentModel } from '../models/appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {

  url = 'http://localhost:8080/appointments';

  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<any> {
    return this.httpClient.get(this.url);
  }

 updateAppointment(id: number, requestBody: AppointmentModel): Observable<any> {
   return this.httpClient.patch(this.url + '/' + id, requestBody);
 }

}
