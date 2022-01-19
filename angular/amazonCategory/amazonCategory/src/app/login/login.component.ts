import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message: string = "";
  public username: string = "";
  public password: string = "";
  public loginService: LoginServiceService = new LoginServiceService();

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.message = this.loginService.login(this.username, this.password);
  }
}
