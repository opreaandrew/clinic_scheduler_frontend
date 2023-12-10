// src/app/doctor/doctor.component.ts

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { DoctorModel } from '../models/doctor.model';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DoctorFormComponent } from '../forms/doctor-form.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'specialization', 'actions'];
  dataSource: MatTableDataSource<DoctorModel> = new MatTableDataSource<DoctorModel>();

  constructor(private doctorService: DoctorService, private dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(result => {
      this.dataSource.data = result.map((element: any) => {
        return {
          id: element.id,
          name: element.name,
          specialization: element.specialization
        };
      });
    });
  }

  openDialog(country?: DoctorModel): void {
    console.log('opening dialog');
    const dialogRef = this.dialogRef.open(DoctorFormComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: country
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('close');

      if (result.event === 'submit' && country) {
        this.doctorService.updateDoctor(country.id, result.data).subscribe();
        location.reload();
      } // else if (result.event === 'add') {
      //   this.appointmentService.addAppointment(result.data).subscribe();
      //   location.reload();
      // }
    })
  }

  delete(id: number): void {
    this.doctorService.deleteDoctor(id).subscribe();
    location.reload();
  }
}
