import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { CallLogService } from '../../service/call-log.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  ID: number;
  callType: string;
  agent: string;
  callerID: string;
  callTime: string;
  event: string;
  holdTime: string;
  queueName: string;
  time: string;
  totalTime: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ID: 1, callType: 'incomming', agent: 'All Alarms', callerID: 'yasith', callTime: 'sdfsd', event: 'dffds', holdTime: 'sasad', queueName: 'ccad', time: 'dsad', totalTime: 'dsd' },
];

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})

export class ViewsComponent implements OnInit {

  user = "saddd";
  incoming = this.in();
  outgoing = this.out();

  get UserName() {
    return this.user;
  }

  in() {
    this.callLogService.incoming();
  };

  out() {
    this.callLogService.outgoing();
  }


  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  displayedColumns: string[] = ['id', 'callType', 'agent', 'callerID', 'callTime', 'event', 'holdTime', 'queueName', 'time', 'totalTime'];
  dataSource = this.getData();


  constructor(public dialog: MatDialog, public callLogService: CallLogService, private router: Router) { }


  ngOnInit() {
  }

  getData() {
    this.callLogService.getData();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px'

    });
  }


}