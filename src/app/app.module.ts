import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthGuard } from './services/auth.guard';
import { PagerNotFoundComponent } from './pager-not-found/pager-not-found.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    PagerNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
