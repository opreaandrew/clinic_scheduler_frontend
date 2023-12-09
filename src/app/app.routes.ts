import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: 'appointments', component: AppointmentComponent },
  { path: 'doctors', component: DoctorComponent },
  { path: 'patients', component: PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }