import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../../service/authentication.service';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) {}

  password : string =  "";
  username : string =  "";

  ngOnInit() {
  }

  login() {
    var credentials: TokenPayload = {
      username: this.username,
      password:  this.password
    }
    this.auth.login(credentials).subscribe(
      (data) => {
        // console.log(data['username'])
        console.log(data)
        this.router.navigateByUrl('/view')
        this.refresh();
        
      } ,
      err => {
        // if(err)
        alert("Inavalid Input");
        console.error(err)
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }
}