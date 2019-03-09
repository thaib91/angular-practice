import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Main page to route pages

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
