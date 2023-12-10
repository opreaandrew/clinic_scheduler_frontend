// src/app/appointment/appointment.component.ts

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { AppointmentModel } from '../models/appointment.model';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentFormComponent } from '../forms/appointment-form.component';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'startTime', 'endTime', 'status', 'doctor', 'patient', 'actions'];
  dataSource: MatTableDataSource<AppointmentModel> = new MatTableDataSource<AppointmentModel>();

  constructor(private appointmentService: AppointmentService, private dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(result => {
      this.dataSource.data = result.map((element: any) => {
        return {
          id: element.id,
          date: element.date,
          startTime: element.startTime,
          endTime: element.endTime,
          status: element.status,
          doctor: element.doctor.name,
          patient: element.patient.name
        };
      });
    });
  }

  complete(id: number): void {
    this.appointmentService.statusChange(id, 'completed').subscribe();
    location.reload();
  }

  cancel(id: number): void {
    this.appointmentService.statusChange(id, 'canceled').subscribe();
    location.reload();
  }

}

