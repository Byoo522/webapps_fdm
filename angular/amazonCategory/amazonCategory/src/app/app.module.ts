import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
// import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    NewMovieComponent,
    // CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
