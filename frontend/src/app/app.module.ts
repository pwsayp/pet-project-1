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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TheoryComponent,
    PractiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    NgxPaginationModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
