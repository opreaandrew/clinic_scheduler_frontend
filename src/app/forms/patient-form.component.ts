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
  patientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    emergencyContact: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
  });

  currentPatient: PatientModel;

  constructor(public dialogRef: MatDialogRef<PatientFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.currentPatient = data;
  }

  ngOnInit(): void {
    this.patientForm.controls.name.setValue(this.currentPatient.name);
    this.patientForm.controls.birthDate.setValue(this.currentPatient.birthDate);
    this.patientForm.controls.emergencyContact.setValue(this.currentPatient.emergencyContact);
    this.patientForm.controls.sex.setValue(this.currentPatient.sex.toString());
  }

  onSubmit(): void {
    const updatedPatient = {
      name: this.patientForm.controls.name.getRawValue(),
      birthDate: this.patientForm.controls.birthDate.getRawValue(),
      emergencyContact: this.patientForm.controls.emergencyContact.getRawValue(),
      sex: this.patientForm.controls.sex.getRawValue(),
    }

    if (this.currentPatient) {
      this.dialogRef.close({ event: 'submit', data: updatedPatient});
    } else {
      this.dialogRef.close({ event: 'add', data: updatedPatient});
    }   
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
