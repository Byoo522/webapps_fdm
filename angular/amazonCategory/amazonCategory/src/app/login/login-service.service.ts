import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  login(username: string, password: string): string {

    if (username == "FDMUser" && password == "1234") {
      return "Welcome FDMUser!";
    } else {
      return "Wrong username/password";
    }
  }

  constructor() { }
}
