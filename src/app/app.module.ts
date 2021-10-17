import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { ApiService } from './api.service';






@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,





  ],
  providers: [DataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }


