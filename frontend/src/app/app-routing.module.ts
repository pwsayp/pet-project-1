import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/content/home/home.component";
import {TheoryComponent} from "./components/content/theory/theory.component";
import {PractiseComponent} from "./components/content/practise/practise.component";
import {AuthenticationComponent} from "./components/content/authentication/authentication.component";
import {AccountComponent} from "./components/content/account/account.component";
import {LogoutComponent} from "./components/content/logout/logout.component";
import {EditTopicComponent} from "./components/content/edit-topic/edit-topic.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'theory', component: TheoryComponent },
  { path: 'practise', component: PractiseComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'account', component: AccountComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'topics/:id/edit', component: EditTopicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
