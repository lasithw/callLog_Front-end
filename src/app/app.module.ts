import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatCheckboxModule,
  MatDividerModule,
  MatDialogModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { CallLogService } from '../service/call-log.service';

import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { LogingComponent } from './loging/loging.component';
import { CallLogTableComponent } from './call-log-table/call-log-table.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    DialogComponent,
    LogingComponent,
    CallLogTableComponent
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
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule
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
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],

  providers: [CallLogService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
