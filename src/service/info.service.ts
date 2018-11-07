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
export class InfoService {

  public data: any;

  uri = 'http://localhost:3002';

  constructor(private http: HttpClient) {
  }

  totalcall() {
    return this.http.get(this.uri + '/info/totalcall', httpOptions);
  }
}