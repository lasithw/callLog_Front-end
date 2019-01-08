import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { error } from 'util';

import { CallLogService } from '../../service/call-log.service';
import { AuthenticationService } from 'src/service/authentication.service';




@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})

export class ViewsComponent implements OnInit {

  user = this.name();
  incoming = this.incomingCall();
  outgoing = this.outgoingCall();
  todayCallCountt = this.todayCall();
  count: any;
  inCallCount: any;
  outCallCount: any;
  main: any;
  username: string;

  ngOnInit() {
  }

  name(): any {
    return this.auth.getUsername();
    // console.log('aaaaa '+this.username);
  }

  incomingCall() {
    this.callLogService.incoming().subscribe(data => {
      this.inCallCount = data[0].callcount;
    });
  };

  outgoingCall() {
    this.callLogService.outgoing().subscribe(data => {
      this.outCallCount = data[0].callcount;
    });
  };

  todayCall() {
    this.callLogService.todayCallCount().subscribe(data => {
      this.count = data[0].todaycount;
    });
  };

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  dataSource = this.getData();

  constructor(public dialog: MatDialog, public callLogService: CallLogService, private auth: AuthenticationService) { }

  data;

  getData() {
    this.callLogService.getData().subscribe(res => {
      this.data = res;
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
  }

  selected;
  // CallerID: string;
  SelectedID;
  Agent: string;

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.ID);
    this.selected = selectedItem;
    this.SelectedID = selectedItem.ID;
    // this.CallerID = selectedItem.CallerID;
    this.Agent = selectedItem.Agent;
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
    console.log(this.checkbox, this.main);
    this.callLogService.addCallLog(callLogData).subscribe((response) => {
      // console.log(response);
    });
  };

  checkbox;

  checkValue(event, category, main) {
    if (event.checked) {
      // console.log(main);
      if (this.checkbox == undefined) {
        this.checkbox = category.value;
        this.main = main;
        console.log('main ' + this.main);

      }
      else {
        this.checkbox = this.checkbox + ",  " + category.value;
        this.main = this.main + ", " + main;
        console.log('checkbox ' + this.checkbox);

      }

    }
  };

  deleteRow(id) {
    this.callLogService.deleteRow(id).subscribe(res => {
      this.data = res;
    });
  }

  logout() {
    this.auth.logout();
  }
}