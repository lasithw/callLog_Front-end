import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CallLogService {
  public data: any;

  uri = 'http://localhost:3002';

  constructor(private http: HttpClient) {
  }
  
  getData() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.get(this.uri + '/data/getData', httpOptions);
    

  }

  incoming() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.get(this.uri + '/data/callType/?i=incoming', httpOptions);
  }

  outgoing() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.get(this.uri + '/data/callType/?i=outgoing', httpOptions);
  }

  getCallLogData() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    return this.http.get(this.uri + '/data/getCallLogData', httpOptions);
    

  }

}


