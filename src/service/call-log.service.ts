import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/service/authentication.service';
import { environment } from '../environments/environment'

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

  uri = environment.apiBase;

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
    return this.http.get(this.uri + '/data/callType/?i=incoming&user=' + this.name(), httpOptions);
  }


  outgoing() {
    return this.http.get(this.uri + '/data/callType/?i=outgoing&user=' + this.name(), httpOptions);
  }

  todayCallCount() {
    return this.http.get(this.uri + '/data/todayCall/?user=' + this.name(), httpOptions);
  }

  getCallLogData() {
    return this.http.get(this.uri + '/data/getCallLogData/?user=' + this.user, httpOptions);
  }

  addCallLog(callLogData) {
    return this.http.post(this.uri + '/data/addCallLog', callLogData);
  }

  deleteRow(id) {
    return this.http.get(this.uri + '/data/delete/?i=' + id, httpOptions);
  }

  getCheckbox(){
    return this.http.get(this.uri + '/data/getCheckbox', httpOptions);
  }
  
  addCategory(catData){
    return this.http.post(this.uri + '/data/addCheckbox' , catData);
  }

}


