// src/app/appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  
  url = 'http://localhost:8080/patients';

  constructor(private httpClient: HttpClient) { }

  getAllPatients(): Observable<any> {
    return this.httpClient.get(this.url);
  }

//  updateCountry(id: number, requestBody: CountryModel): Observable<any> {
//    return this.httpClient.patch(this.url + '/' + id, requestBody);
//  }


}
