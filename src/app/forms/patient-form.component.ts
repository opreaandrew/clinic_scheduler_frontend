import { Component, Optional, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientModel } from '../models/patient.model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent {
  appointmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    emergencyContact: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
  });

  currentAppointment: PatientModel;

  constructor(public dialogRef: MatDialogRef<PatientFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.currentAppointment = data;
  }

  ngOnInit(): void {
    this.appointmentForm.controls.name.setValue(this.currentAppointment.name);
    this.appointmentForm.controls.birthDate.setValue(this.currentAppointment.birthDate);
    this.appointmentForm.controls.emergencyContact.setValue(this.currentAppointment.emergencyContact);
    this.appointmentForm.controls.sex.setValue(this.currentAppointment.sex.toString());
  }

  onSubmit(): void {
    const updatedCountry = {
      name: this.appointmentForm.controls.name.getRawValue(),
      birthDate: this.appointmentForm.controls.birthDate.getRawValue(),
      emergencyContact: this.appointmentForm.controls.emergencyContact.getRawValue(),
      sex: this.appointmentForm.controls.sex.getRawValue(),
    }

    if (this.currentAppointment) {
      this.dialogRef.close({ event: 'submit', data: { value: updatedCountry, isSearch: false } });
    } else {
      this.dialogRef.close({ event: 'add', data: { value: updatedCountry, isSearch: false } });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
