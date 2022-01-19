import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  year: Number = 0;
  title: String = "";
  genre: String = "";
  director: String = "";
  created: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.title + " " + this.year + " " + this.genre + " " + this.director);
    this.created = true;
  }

}
