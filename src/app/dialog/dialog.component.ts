import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ViewsComponent } from '../views/views.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  user = "qsaqdad";

constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  onClose(){
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
