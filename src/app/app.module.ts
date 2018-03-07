import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { CookieModule } from "ngx-cookie";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from "./app.route";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFound } from "./components/pageNotFound/pageNotFound.component";
import { CodingreviewComponent } from './components/codingreview/codingreview.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SearchComponent,
    PageNotFound,
    CodingreviewComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CookieModule.forRoot(),
    routing,
    BrowserAnimationsModule,
    OrderModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
