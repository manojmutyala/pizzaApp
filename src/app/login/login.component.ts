import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    style:'width:100%'
  }
})
export class LoginComponent implements OnInit {
  submitForm(): void {
    
  }
  constructor() { }

  ngOnInit() {
  }

}
