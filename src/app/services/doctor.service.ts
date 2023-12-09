// src/app/appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {

  url = 'http://localhost:8080/doctors';

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<any> {
    return this.http.get(this.url);
  }

//  updateCountry(id: number, requestBody: CountryModel): Observable<any> {
//    return this.http.patch(this.url + '/' + id, requestBody);
//  }

}
