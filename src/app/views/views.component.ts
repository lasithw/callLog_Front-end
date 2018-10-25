import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBarModule } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { CallLogService } from '../../service/call-log.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})

export class ViewsComponent implements OnInit {

  user = "saddd";
  incoming = this.incomingCall();
  outgoing = this.outgoingCall();
  inCallCount: any;
  outCallCount: any;

  ngOnInit() {
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

  onSubmit(){
    this.openDialog();
    // this.onSelect();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px'

    });
  }

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.ID); // You get the Id of the selected item here
  }


}