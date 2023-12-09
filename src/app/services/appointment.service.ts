// src/app/appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {

  url = 'http://localhost:8080/appointments';

  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<any> {
    return this.httpClient.get(this.url);
  }

//  updateCountry(id: number, requestBody: CountryModel): Observable<any> {
//    return this.httpClient.patch(this.url + '/' + id, requestBody);
//  }

}
