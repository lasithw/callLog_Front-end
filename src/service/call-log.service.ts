import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class CallLogService {
  public data: any;

  uri = 'http://localhost:3002';

  constructor(private http: HttpClient) {
  }


  getData() {
    return this.http.get(this.uri + '/data/getData', httpOptions);
  }


  incoming() {
    return this.http.get(this.uri + '/data/callType/?i=incoming', httpOptions);
  }


  outgoing() {
    return this.http.get(this.uri + '/data/callType/?i=outgoing', httpOptions);
  }

  todayCallCount() {
    return this.http.get(this.uri + '/data/todayCall', httpOptions);
  }

  getCallLogData() {
    return this.http.get(this.uri + '/data/getCallLogData', httpOptions);
  }

  addCallLog(callLogData) {
    return this.http.post(this.uri + '/data/addCallLog' , callLogData);
  }

  deleteRow(id){
    return this.http.get(this.uri + '/data/delete/?i='+id, httpOptions);
  }

}


