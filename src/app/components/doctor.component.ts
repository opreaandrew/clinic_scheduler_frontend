// src/app/doctor/doctor.component.ts

import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  doctors: any[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): any {
    this.doctorService.getAllDoctors().subscribe((doctors: any[]) => {
      this.doctors = doctors;
    });
  }
}
