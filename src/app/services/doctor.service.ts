// src/app/appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorModel } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {

  url = 'http://localhost:8080/doctors';

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<any> {
    return this.http.get(this.url);
  }

  updateDoctor(id: number, requestBody: DoctorModel): Observable<any> {
    return this.http.patch(this.url + '/' + id, requestBody);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  addDoctor(requestBody: DoctorModel): Observable<any> {
    return this.http.post(this.url, requestBody);
  }
}
