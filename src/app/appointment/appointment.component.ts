// src/app/appointment/appointment.component.ts

import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointments: any[] = [];

  displayedColumns: string[] = ['id', 'date', 'startTime', 'endTime', 'status'];
  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe((appointments: any[]) => {
      this.appointments = appointments.map((element: any) => {
        return {
          id: element.id,
          date: element.date,
          startTime: element.startTime,
          endTime: element.endTime,
          status: element.status
        };
      })
    });
  }
}
