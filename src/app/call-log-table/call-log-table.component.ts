import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CallLogService } from '../../service/call-log.service';
import { ExcelService } from '../../service/excel.service'

@Component({
  selector: 'app-call-log-table',
  templateUrl: './call-log-table.component.html',
  styleUrls: ['./call-log-table.component.css']
})
export class CallLogTableComponent implements OnInit {
  data;

  ngOnInit() {
    this.getCallLogData();
  }

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  // displayedColumns: string[] = ['id', 'user', 'callType', 'agent', 'callerID', 'callTime', 'event', 'holdTime', 'queueName', 'time', 'totalTime', 'date', 'category', 'mainCategory'];
  dataSource = this.getCallLogData();

  constructor(
    public callLogService: CallLogService, 
    private router: Router,
    private excelService: ExcelService
    ) { }

  getCallLogData() {
    this.callLogService.getCallLogData().subscribe(res => {
      this.data = res;
      // console.log(this.data);
      var sample = JSON.stringify(res);
    });
  }

  download(){
    this.excelService.exportAsExcelFile(this.data, 'call_log');
  }

}
