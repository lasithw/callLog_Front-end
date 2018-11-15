import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'

export interface UserDetails {

  username: string
  password: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  uri = 'http://localhost:3002';

  private token: string;
  private username: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private saveUser(username: string): void {
    localStorage.setItem('user', username);
    this.username = username;
    // console.log(username);
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  private getUser(): string{
    if (!this.username) {
      this.username = localStorage.getItem('user')
    }
    return this.username
  }

  public getUserDetails() {
    const token = this.getToken()
    let payload
    if (token) {
      return token
    } else {
      return null
    }
  }

  public getUsername() {
    const username = this.getUser()
      return this.username

  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      // return user.exp > Date.now() / 1000
      return true
    } else {
      return false
    }
  }

  public login(user: TokenPayload): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const base = this.http.post(this.uri + '/login/login', user, httpOptions)

    const request = base.pipe(
      map((data) => {
        if (data['token']) {
          this.saveToken(data['token']);
          this.saveUser(data['username']);
        }
        // console.log(data['username']);
        return data;
      })
    )
    return request
  }

  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('usertoken');
    window.localStorage.removeItem('user');
    this.router.navigateByUrl('/loging')
  }
}
