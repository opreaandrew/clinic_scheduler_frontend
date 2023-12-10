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

  displayedColumns: string[] = ['id', 'date', 'startTime', 'endTime', 'status'];
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
          status: element.status
        };
      });
    });
  }

  openDialog(country?: AppointmentModel): void {
    console.log('opening dialog');
    const dialogRef = this.dialogRef.open(AppointmentFormComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: country
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('close');

      if (result.event === 'submit' && country) {
        this.appointmentService.updateAppointment(country.id, result.data).subscribe();
        location.reload();
      } // else if (result.event === 'add') {
      //   this.appointmentService.addAppointment(result.data).subscribe();
      //   location.reload();
      // }
    })
  }

}

