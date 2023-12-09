// src/app/appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from './app.config'; // Import the configuration file

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private baseUrl = AppConfig.apiUrl; // Use the base URL from the configuration file

  constructor(private http: HttpClient) {}

  getAllAppointments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointments`);
  }

  // ... other methods
}
