import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  email: string = "";
  role: string = "";
  clearedQualityGate: boolean = false;
  stream: string = "";
  emailIsValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.email.toLowerCase().endsWith("fdmgroup.com")) {
      console.log("hello, form is working")
      this.emailIsValid = true;
    }
  }

}
