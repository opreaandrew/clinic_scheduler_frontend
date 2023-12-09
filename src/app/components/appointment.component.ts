// src/app/appointment/appointment.component.ts

import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

import { MatTableDataSource } from '@angular/material/table';
import { AppointmentModel } from '../models/appointment.model';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'startTime', 'endTime', 'status'];
  dataSource: MatTableDataSource<AppointmentModel> = new MatTableDataSource<AppointmentModel>();

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(result => {
      this.dataSource.data = result.map((element: any) => {
        return {
          id: element.id,
          date: element.date,
          startTime: element.startTime,
          endTime: element.endTime,
          status: element.status
        };
      });
    });
  }
}

