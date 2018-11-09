import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    console.log(!this.auth.isLoggedIn())
    if (!this.auth.isLoggedIn()) {
    
      return false
    }
    return true
  }
}
