import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../service/member.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  data;
  call;
  closeResult: string;
  public date: Array<any> = [];
  public incoming: Array<any> = [];
  public outgoing: Array<any> = [];

  number = '';
  name: string = "";
  member: string = "";
  main_region: string = "";
  sub_region: string = "";

  constructor(public memberService: MemberService, private modalService: NgbModal) { }

  // dataSource = this.getData();

  ngOnInit() {
    this.getData();
    this.getCallData();
    this.getChartData();
  }

  getData() {
    this.memberService.memberData().subscribe(res => {
      this.data = res;
      var sample = JSON.stringify(res);
      // console.log(this.data);
    });
  }

  getCallData() {
    this.memberService.memberCount().subscribe(res => {
      this.call = res;
      var sample = JSON.stringify(res);
    });
  }

  getChartData() {
    this.memberService.chartData().subscribe(res => {
      var sample = JSON.stringify(res);
      for (let i in res) {
        this.date[i] = this.call[i].date;
        this.incoming[i] = this.call[i].incoming;
        this.outgoing[i] = this.call[i].outgoing;
      }
      console.log(this.date);
    });
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

    var memberData = {
      number: this.number,
      name: this.name,
      member: this.member,
      main_region: this.main_region,
      sub_region: this.sub_region
    }
    this.memberService.addData(memberData).subscribe((response) => {
      console.log(response);
    });
    // this.refresh();
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

  // lineChart
  public lineChartData: Array<any> = [
    { data: this.incoming, label: 'Incoming' },
    { data: this.outgoing, label: 'Outgoing' }
  ];
  public lineChartLabels: Array<any> = this.date;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0,51,255,0.5)',
      borderColor: 'rgba(153,153,153,0.5)',
      pointBackgroundColor: 'rgba(255,255,255,0.7)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },

    { // grey
      backgroundColor: 'rgba(0,153,255,0.5)',
      borderColor: 'rgba(153,153,153,0.5)',
      pointBackgroundColor: 'rgba(255,255,255,0.7)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  refresh(): void {
    window.location.reload();
  }
}
