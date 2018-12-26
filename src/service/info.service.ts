import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

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

  uri = environment.apiBase;

  constructor(private http: HttpClient) {
  }

  totalcall() {
    return this.http.get(this.uri + '/info/totalcall', httpOptions);
  }
}