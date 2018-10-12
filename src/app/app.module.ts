import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatCheckboxModule,
  MatCheckbox,
  MatDividerModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { BsDropdownModule } from 'ngx-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { LogingComponent } from './loging/loging.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    DialogComponent,
    LogingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    BsDropdownModule.forRoot(),
    MatTableModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
