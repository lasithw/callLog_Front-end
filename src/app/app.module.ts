import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { GrdFilterPipe } from './summary/grd-filter.pipe';
import { ChartsModule } from 'ng2-charts';
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
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { CallLogService } from '../service/call-log.service';

import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { LogingComponent } from './loging/loging.component';
import { CallLogTableComponent } from './call-log-table/call-log-table.component';
import { InfoComponent } from './info/info.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    DialogComponent,
    LogingComponent,
    CallLogTableComponent,
    InfoComponent,
    SummaryComponent,
    GrdFilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    BsDropdownModule.forRoot(),
    NgbModule,
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
    HttpClientModule,
    ChartsModule
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
