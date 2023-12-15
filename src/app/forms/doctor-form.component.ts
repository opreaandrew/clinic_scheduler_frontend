import { Component, Optional, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from '../models/doctor.model';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css'
})
export class DoctorFormComponent implements OnInit{
  doctorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    specialization: new FormControl('', Validators.required)
  });

  currentDoctor: DoctorModel;

  constructor(public dialogRef: MatDialogRef<DoctorFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.currentDoctor = data;
  }

  ngOnInit(): void {
    this.doctorForm.controls.name.setValue(this.currentDoctor.name);
    this.doctorForm.controls.specialization.setValue(this.currentDoctor.specialization);
  }

  onSubmit(): void {
    const updatedDoctor = {
      name: this.doctorForm.controls.name.getRawValue(),
      specialization: this.doctorForm.controls.specialization.getRawValue()
    }


    if (this.currentDoctor) {
      this.dialogRef.close({ event: 'submit', data: { value: updatedDoctor, isSearch: false } });
    } else {
      this.dialogRef.close({ event: 'add', data: { value: updatedDoctor, isSearch: false } });
    }

  }

  cancel(): void {
    this.dialogRef.close();
  }
}
