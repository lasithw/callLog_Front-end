import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SummaryComponent } from'../app/summary/summary.component';
import { environment } from '../environments/environment'

var httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public data: any;

  uri = environment.apiBase;

  constructor(private http: HttpClient) {
  }

  memberData() {
    return this.http.get(this.uri + '/member/getMemberData', httpOptions);
  }

  memberCount() {
    return this.http.get(this.uri + '/member/getMemberCount', httpOptions);
  }

  chartData() {
    return this.http.get(this.uri + '/member/getChartData/?name='+localStorage.getItem('cName'), httpOptions);
  }

  addData(memberData){
    return this.http.post(this.uri + '/member/add' , memberData);
  }

  getName(){
    return this.http.get(this.uri + '/member/getName');
  }

  getAnnualData(data){
    return this.http.get(this.uri + '/member/getAnnualData/?data='+data);
  }

  getAnnualChart(data){
    return this.http.get(this.uri + '/member/getAnnualChart/?data='+data);
  }

  getDatePickerData(start,end){
    return this.http.get(this.uri + '/member/getDatePickerData/?start='+start+'&end'+end);
  }

  getDatePickerChart(start,end){
    return this.http.get(this.uri + '/member/getDatePickerChart/?start='+start+'&end'+end);
  }
}