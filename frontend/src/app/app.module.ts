import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/content/home/home.component';
import { FooterComponent } from './components/main/footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { TheoryComponent } from './components/content/theory/theory.component';
import { PractiseComponent } from './components/content/practise/practise.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HeaderComponent} from "./components/main/header/header.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import { AuthenticationComponent } from './components/content/authentication/authentication.component';
import { AccountComponent } from './components/content/account/account.component';
import { LogoutComponent } from './components/content/logout/logout.component';
import { EditTopicComponent } from './components/content/edit-topic/edit-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TheoryComponent,
    PractiseComponent,
    AuthenticationComponent,
    AccountComponent,
    LogoutComponent,
    EditTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    NgxPaginationModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
