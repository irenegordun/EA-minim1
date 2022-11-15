import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { ParkingComponent } from './components/parking/parking.component';
import { ParkingsComponent } from './components/parkings/parkings.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormComponent } from './components/form/form.component';
import { CreateParking2Component } from './components/create-parking2/create-parking2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { ReportsComponent } from './components/reports/reports.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    LoginComponent,
    ParkingComponent,
    ParkingsComponent,
    FormComponent,
    ConfirmationDialogComponent,
    CreateParking2Component,
    ReportFormComponent,  //irene gordun
    ReportsComponent      //irene gordun
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
