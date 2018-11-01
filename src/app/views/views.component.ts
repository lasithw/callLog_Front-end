import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBarModule } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { CallLogService } from '../../service/call-log.service';
import { Router } from '@angular/router';
import { LogingComponent } from '../loging/loging.component';
import { NgModel } from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})

export class ViewsComponent implements OnInit {

  user = "saddd";
  incoming = this.incomingCall();
  outgoing = this.outgoingCall();
  todayCallCount = this.todayCall();
  count: any;
  inCallCount: any;
  outCallCount: any;
  main: any;

  ngOnInit() {
    this.todayCall();
    this.incomingCall();
    this.outgoingCall();
  }

  incomingCall() {
    this.callLogService.incoming().subscribe(data => {
      // console.log(data[0].callcount);
      this.inCallCount = data[0].callcount;
    });
  };

  outgoingCall() {
    this.callLogService.outgoing().subscribe(data => {
      // console.log(data[0].callcount);
      this.outCallCount = data[0].callcount;
    });
  };

  todayCall() {
    this.callLogService.todayCallCount().subscribe(data => {
      // console.log(data[0].callcount);
      this.count = data[0].todaycount;
    });
  };

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  displayedColumns: string[] = ['id', 'callType', 'agent', 'callerID', 'callTime', 'event', 'holdTime', 'queueName', 'time', 'totalTime'];
  dataSource = this.getData();

  constructor(public dialog: MatDialog, public callLogService: CallLogService, private router: Router) { }

  data;

  getData() {
    this.callLogService.getData().subscribe(res => {
      this.data = res;
      // console.log(this.data);
      var sample = JSON.stringify(res);
    });
  }

  refresh(): void {
    window.location.reload();
  }

  onSubmit() {
    this.addCallLogData();
    this.refresh();
    if (!error) {
      this.openDialog();
    }
    this.deleteRow(this.selected.ID);
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px'

    });
  }

  selected;

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.ID);
    this.selected = selectedItem;
  }
  
  addCallLogData() {
    var date = new Date()

    var callLogData = {
      id: this.selected.ID,
      user: this.user,
      callType: this.selected.CallType,
      agent: this.selected.Agent,
      callerID: this.selected.CallerID,
      callTime: this.selected.CallTime,
      event: this.selected.Event,
      holdTime: this.selected.HoldTime,
      queueName: this.selected.QueueName,
      time: this.selected.Time,
      totalTime: this.selected.TotalTime,
      date: date.toISOString().split('T')[0],
      category: this.checkbox,
      mainCategory: this.main

    }
    this.callLogService.addCallLog(callLogData).subscribe((response) => {
      console.log(response);
    });
  };

  checkbox;

  checkValue(event: any, category, main) {
    if (category.checked) {
      console.log(main);
      if (this.checkbox == undefined) {
        this.checkbox = category.value;
        this.main = main;
      }
      else {
        this.checkbox = this.checkbox + ",  " + category.value;
        this.main = this.main +", "+ main;
      }

    }
  };

  deleteRow(id) {
    this.callLogService.deleteRow(id).subscribe(res => {
      this.data = res;
      // console.log(this.data);
      var sample = JSON.stringify(res);
    });
  }
}