import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../../service/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  // tcall: any;
  // inCall: any;
  // outCall: any;
  // main: any;

  // displayedColumns: string[] = ['user', 'totalCall', 'incoming', 'outgoing'];
  dataSource = this.totalcall();

  constructor(public infoService: InfoService, private router: Router) { }

  ngOnInit() {
  }

  data;

  totalcall() {
    this.infoService.totalcall().subscribe(res => {
      this.data = res;
      console.log(this.data);
      var sample = JSON.stringify(res);
    });
  }

}
