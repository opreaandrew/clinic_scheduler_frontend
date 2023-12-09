// src/app/patient/patient.component.ts

import { Component, OnInit } from '@angular/core';
import { Patientservice } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  patients: any[] = [];

  constructor(private patientService: Patientservice) {}

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe((patients: any[]) => {
      this.patients = patients;
    });
  }
}
