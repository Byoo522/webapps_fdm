import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public categories: Array<String> = ["Home", "Electronics", "Fashion"];
  public playerName: String = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  myFunction(x: number) {
    console.log(x);
  }

}
