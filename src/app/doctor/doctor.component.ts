// src/app/doctor/doctor.component.ts

import { Component, OnInit } from '@angular/core';
import { Doctorservice } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  doctors: any[] = [];

  constructor(private doctorService: Doctorservice) {}

  ngOnInit(): any {
    this.doctorService.getAllDoctors().subscribe((doctors: any[]) => {
      this.doctors = doctors;
    });
  }
}
