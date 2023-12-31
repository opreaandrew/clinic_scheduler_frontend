import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppointmentComponent } from './components/appointment.component';
import { AppointmentFormComponent } from './forms/appointment-form.component';
import { DoctorComponent } from './components/doctor.component';
import { PatientComponent } from './components/patient.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DoctorFormComponent } from './forms/doctor-form.component';
import { PatientFormComponent } from './forms/patient-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentFormComponent,
    DoctorComponent,
    DoctorFormComponent,
    PatientComponent,
    PatientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
