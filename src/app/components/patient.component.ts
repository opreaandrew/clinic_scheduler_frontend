// src/app/patient/patient.component.ts

import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { MatTableDataSource } from '@angular/material/table';
import { PatientModel } from '../models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'birthDate', 'emergencyContact', 'sex'];
  dataSource: MatTableDataSource<PatientModel> = new MatTableDataSource<PatientModel>();

  constructor(private patientService: PatientService) {}

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
}
