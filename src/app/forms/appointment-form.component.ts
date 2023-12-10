import { Component, Optional, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentModel } from '../models/appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {
  appointmentForm = new FormGroup({
    date: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  currentAppointment: AppointmentModel;

  constructor(public dialogRef: MatDialogRef<AppointmentFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.currentAppointment = data;
  }

  ngOnInit(): void {
    this.appointmentForm.controls.date.setValue(this.currentAppointment.date);
    this.appointmentForm.controls.startTime.setValue(this.currentAppointment.startTime);
    this.appointmentForm.controls.endTime.setValue(this.currentAppointment.endTime);
    this.appointmentForm.controls.status.setValue(this.currentAppointment.status.toString());
  }

  onSubmit(): void {
    const updatedCountry = {
      date: this.appointmentForm.controls.date.getRawValue(),
      startTime: this.appointmentForm.controls.startTime.getRawValue(),
      endTime: this.appointmentForm.controls.endTime.getRawValue(),
      status: this.appointmentForm.controls.status.getRawValue(),
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
