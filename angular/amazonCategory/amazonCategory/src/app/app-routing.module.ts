import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
  { path: "list", component: ListComponent },
  // { path: "/login", component: LoginComponent },
  { path: "new", component: NewMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
