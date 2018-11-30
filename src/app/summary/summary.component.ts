import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../service/member.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  data;
  call;

  constructor(public memberService: MemberService) { }

  // dataSource = this.getData();

  ngOnInit() {
    this.getData();
    this.getCallData();
  }

  getData() {
    this.memberService.memberData().subscribe(res => {
      this.data = res;
      var sample = JSON.stringify(res);
      // console.log(this.data);
    });
  }

  getCallData(){
    this.memberService.incoming().subscribe(res => {
      this.call = res;
      var sample = JSON.stringify(res);
      // console.log(this.call);
    });
  }

}
