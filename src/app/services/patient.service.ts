// src/app/appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientModel } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  
  url = 'http://localhost:8080/patients';

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<any> {
    return this.http.get(this.url);
  }

  updatePatient(id: number, requestBody: PatientModel): Observable<any> {
    return this.http.patch(this.url + '/' + id, requestBody);
  }

}
