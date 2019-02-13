import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { error } from 'util';

import { CallLogService } from '../../service/call-log.service';
import { AuthenticationService } from 'src/service/authentication.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})

export class ViewsComponent implements OnInit {

  allAlarms;
  wifi;
  coreNetwork;
  powerRelated;
  other;
  siteDown;
  cellDown;
  trxDown;
  sctpDown;
  e1down;
  faultsVswr;
  newSites;
  cellBlock;
  e1Check;
  maintenanceVswr;
  batteryValue;
  rru;
  cellTraffic;
  acdc;
  maintenanceOther;
  otherOperators;

  user = this.name();
  incoming = this.incomingCall();
  outgoing = this.outgoingCall();
  todayCallCountt = this.todayCall();
  count: any;
  inCallCount: any;
  outCallCount: any;
  main: any;
  username: string;
  checkboxes: any;
  checkbox;
  mainCategory: string = "";
  subCategory: string = "";
  closeResult: string;

  ngOnInit() {
    this.getCheckbox();
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

  constructor(
    public dialog: MatDialog,
    public callLogService: CallLogService,
    private auth: AuthenticationService,
    private modalService: NgbModal,
  ) { }

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
    if (!error) {
      this.openDialog();
    }
    this.deleteRow(this.selected.ID);
    this.todayCall();
    this.incomingCall();
    this.outgoingCall();
    this.getData();
    this.refresh();
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
      callerID: (this.selected.CallerID).slice(-9,),
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
    console.log(callLogData);
    console.log(this.checkbox, this.main);
    this.callLogService.addCallLog(callLogData).subscribe((response) => {
      // console.log(response);
    });
  };

  checkValue(event, category, main) {
    if (event.checked) {
      // console.log(main);
      if (this.checkbox == undefined) {
        this.checkbox = category;
        this.main = main;
        console.log('main ' + this.main + '  cat ' + this.checkbox);

      }
      else {
        this.checkbox = this.checkbox + ",  " + category;
        this.main = this.main + ", " + main;
        console.log('main ' + this.main + '  cat ' + this.checkbox);
      }
    }
  };

  catallAlarm: Array<any> = [];
  catwifi: Array<any> = [];
  catcore: Array<any> = [];
  catpower: Array<any> = [];
  catother: Array<any> = [];
  faultCat: Array<any> = [];
  mainCat: Array<any> = [];
  otherCat: Array<any> = [];
  cat: Array<any> = [];

  getCheckbox() {
    this.catallAlarm = [];
    this.catwifi = [];
    this.catcore = [];
    this.catpower = [];
    this.catother = [];
    this.faultCat = [];
    this.mainCat = [];
    this.otherCat = [];
    this.cat = [];

    this.callLogService.getCheckbox().subscribe(res => {
      this.checkboxes = res;
      // console.log(this.checkboxes);

      (res as Array<any>).forEach(element => {

        switch (element.main_category) {
          case "All Alarms":
            this.catallAlarm.push(element);
            break;

          case "WiFi":
            this.catwifi.push(element);
            break;

          case "Core Network":
            this.catcore.push(element);
            break;

          case "Power Related":
            this.catpower.push(element);
            break;

          case "Other":
            this.catother.push(element);
            break;

          case "Faults (Site/Cell/TRX Down)":
            this.faultCat.push(element);
            break;

          case "Maintenance":
            this.mainCat.push(element);
            break;

          case "Other Operators":
            this.otherCat.push(element);
            break;

          default:
            this.cat.push(element);
            break;
        }
      });
      console.log(this.cat);
    });
  }

  deleteRow(id) {
    this.callLogService.deleteRow(id).subscribe(res => {
      this.data = res;
    });
  }

  logout() {
    this.auth.logout();
  }

  //modal
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  add() {
    var catData = {
      main_category: this.mainCategory,
      category: this.subCategory,
    }
    this.callLogService.addCategory(catData).subscribe((response) => {
      console.log(response);
    });
    // this.refresh();
    this.getCheckbox();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
