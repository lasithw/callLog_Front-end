import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  uri = 'http://localhost:3002';

  constructor(private http: HttpClient) {
  }

  memberData() {
    return this.http.get(this.uri + '/member/getMemberData', httpOptions);
  }

  incoming() {
    return this.http.get(this.uri + '/member/getMemberCount/?i=incoming', httpOptions);
  }

  outgoing() {
    return this.http.get(this.uri + '/member/getMemberCount', httpOptions);
  }
}