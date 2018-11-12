import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/service/authentication.service';

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
  username: string;
  user = this.name();

  uri = 'http://localhost:3002';

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  name(): any {
    return this.username = this.auth.getUsername();
    // console.log('aaaaa '+this.username);
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
    console.log('aaa '+this.username);
    return this.http.get(this.uri + '/data/getCallLogData/?user='+this.user, httpOptions);
  }

  addCallLog(callLogData) {
    return this.http.post(this.uri + '/data/addCallLog' , callLogData);
  }

  deleteRow(id){
    return this.http.get(this.uri + '/data/delete/?i='+id, httpOptions);
  }

}


