import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShuffleComponent} from "./containers/shuffle/shuffle.component";


const routes: Routes = [
  {
    path: '',
    component: ShuffleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
