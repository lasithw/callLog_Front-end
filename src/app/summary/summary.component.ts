import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../service/member.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ExcelService } from '../../service/excel.service';
import { switchMap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  model;
  data;
  call;
  chartCall;
  date1;
  date2;
  agentName;
  chartName;
  closeResult: string;
  public date: Array<any> = [];
  public incoming: Array<any> = [];
  public outgoing: Array<any> = [];
  public agent: Array<any> = [];
  public chartType: string = 'bar';
  public barchartDate: Array<any> = [];
  public barchartIncoming: Array<any> = [];
  public barchartOutgoing: Array<any> = [];


  number = '';
  name: string = "";
  member: string = "";
  main_region: string = "";
  sub_region: string = "";

  constructor(
    public memberService: MemberService,
    private modalService: NgbModal,
    private excelService: ExcelService
  ) { }

  // dataSource = this.getData();

  ngOnInit() {
    this.getData();
    this.getCallData();
    this.getName();
    this.barchart();
    // this.datePicker(this.date1,this.date2);
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

  // Agent Call Log filter
  annualData(value: any) {
    this.memberService.getAnnualData(value).subscribe(res => {
      this.call = res;
    });

    this.memberService.getAnnualChart(value).subscribe(res => {
      // this.call = res;
      // console.log(res);
      this.barchartDate.length = 0;
      this.barchartIncoming = [];
      this.barchartOutgoing = [];

      for (let i in res) {
        this.barchartDate[i] = res[i].date
        this.barchartIncoming[i] = res[i].incoming
        this.barchartOutgoing[i] = res[i].outgoing
      }
      this.barchart();
    });
    // console.log(this.barchartIncoming);
  }

  datePicker(dateStart, dateEnd) {

    this.date1 = dateStart.toISOString().split('T')[0];
    this.date2 = dateEnd.toISOString().split('T')[0];
    console.log(this.date1, this.date2);

    this.memberService.getDatePickerData(this.date1,this.date2).subscribe(res => {
      this.call = res;
      
    })

    this.memberService.getDatePickerChart(this.date1,this.date2).subscribe(res => {
      this.chartCall = res;
      
      this.barchartIncoming = [];
      this.barchartOutgoing = [];

      for (let i in res) {
        this.barchartDate[i] = res[i].date
        this.barchartIncoming[i] = res[i].incoming
        this.barchartOutgoing[i] = res[i].outgoing
      }
      this.barchart();
    })

  }

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[]
  public barChartType: string
  public barChartLegend: boolean
  public barChartData: any[]

  barchart() {
    this.barChartType = 'bar';
    this.barChartLegend = true;

    this.barChartLabels = this.barchartDate;

    this.barChartData = [
      { data: this.barchartIncoming, label: 'Incoming' },
      { data: this.barchartOutgoing, label: 'Outgoing' }
    ];
  }

  public randomize(): void {
    this.barchart()
  }


  getName() {
    this.memberService.getName().subscribe(res => {
      this.agentName = res;
      var sample = JSON.stringify(res);
      for (let i in res) {
        this.agent[i] = this.agentName[i].name;
      }
      // console.log(this.agent)
    });
  }

  filterForeCasts(filterVal: any) {
    this.chartName = filterVal
    // console.log(this.chartName);
    window.localStorage.removeItem('cName');
    localStorage.setItem('cName', this.chartName);

    this.getChartData();
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.call, 'agent_call_log');
  }

  getChartData() {
    this.memberService.chartData().subscribe(res => {

      this.date.length = 0;
      this.outgoing = [];
      this.incoming = [];
      var sample = JSON.stringify(res);
      // console.log(res);

      for (let i in res) {
        this.date[i] = res[i].date;
        this.incoming[i] = res[i].incoming;
        this.outgoing[i] = res[i].outgoing;
      }
      this.lineChartData = [
        { data: this.incoming, label: 'Incoming' },
        { data: this.outgoing, label: 'Outgoing' }];
      // console.log(this.outgoing, this.incoming);
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
    this.refresh();
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
    { data: this.incoming.length > 0 ? this.incoming : [], label: 'Incoming' },
    { data: this.outgoing.length > 0 ? this.outgoing : [], label: 'Outgoing' }];
  public lineChartLabels: Array<any> = this.date;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,204,0,0.6)',
      borderColor: 'rgba(153,153,153,0.5)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },

    {
      backgroundColor: 'rgba(0,0,153,0.6)',
      borderColor: 'rgba(153,153,153,0.5)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
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
