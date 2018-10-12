import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';

export interface PeriodicElement {
  no: number;
  type: string;
  category: string;
  reg_user: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, type: 'incomming', category: 'All Alarms', reg_user: 'yasith' },
  { no: 2, type: 'outgoing', category: 'sdsadas', reg_user: 'deef' },
  { no: 3, type: 'incomming', category: 'sdssadaadas', reg_user: 'eesadam' },
  { no: 4, type: 'incomming', category: 'fggrsdsadas', reg_user: 'sfwradam' },
  { no: 5, type: 'outgoing', category: 'gtggsdsadas', reg_user: 'wersadam' },
  { no: 6, type: 'outgoing', category: 'wwsdsadas', reg_user: 'ggsadam' },
];

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})


export class ViewsComponent implements OnInit {

  user = "saddd";

  get UserName() {
    return this.user;
  }

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px'

    });
  }

  ngOnInit() {
  }

}