import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoodsentryComponent } from './goodsentry/goodsentry.component';
import { GoodslistComponent } from './goodslist/goodslist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodsentryComponent,
    GoodslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
