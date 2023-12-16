
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientModel } from '../models/patient.model';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PatientFormComponent } from '../forms/patient-form.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'birthDate', 'emergencyContact', 'sex', 'actions'];
  dataSource: MatTableDataSource<PatientModel> = new MatTableDataSource<PatientModel>();

  constructor(private patientService: PatientService, private dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(result => {
      this.dataSource.data = result.map((element: any) => {
        return {
          id: element.id,
          name: element.name,
          birthDate: element.birthDate,
          emergencyContact: element.emergencyContact,
          sex: element.sex
        };
      });
    });
  }

  openDialog(patient?: PatientModel): void {
    console.log('opening dialog');
    const dialogRef = this.dialogRef.open(PatientFormComponent, {
      width: '500px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: patient
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('close');

      if (result.event === 'submit' && patient) {
        this.patientService.updatePatient(patient.id, result.data).subscribe();
        location.reload();
      } else if (result.event === 'add') {
        this.appointmentService.addAppointment(result.data).subscribe();
        location.reload();
      }
    })
  }

}
