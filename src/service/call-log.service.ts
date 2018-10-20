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

    let obs = this.http.get(this.uri + '/data/getData', httpOptions);
    obs.subscribe(res => {
      this.data = res;
      console.log(this.data);
      var sample = JSON.stringify(res);
    });

  }

  incoming() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    let obs = this.http.get(this.uri + '/data/callType/?i=incoming', httpOptions);
    obs.subscribe(res => {
      this.data = res[0].callcount;
      console.log(this.data);
      // var sample = JSON.stringify(res);
    });

  }

  outgoing() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    let obs = this.http.get(this.uri + '/data/callType/?i=outgoing', httpOptions);
    obs.subscribe(res => {
      this.data = res[0].callcount;
      console.log(this.data);
      // var sample = JSON.stringify(res);
    });

  }

}


