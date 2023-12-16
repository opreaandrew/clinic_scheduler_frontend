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

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<any> {
    return this.http.get(this.url);
  }

 
  statusChange(id: number, status: string): Observable<any> {
    const url = `${this.url}/${id}/${status}`;
    return this.http.patch(url, []);
  }

  addAppointment(requestBody: AppointmentModel): Observable<any> {
    return this.http.post(this.url, requestBody);
  }

}
