import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/content/home/home.component";
import {TheoryComponent} from "./components/content/theory/theory.component";
import {PractiseComponent} from "./components/content/practise/practise.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'theory', component: TheoryComponent },
  { path: 'practise', component: PractiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
