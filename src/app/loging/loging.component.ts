import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigateByUrl('/view');
    } else {
      alert("Invalid credentials");
    }
  }
}