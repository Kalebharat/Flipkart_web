import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commanComponent/header/header.component';
import { CartPageComponent } from './commanComponent/cart-page/cart-page.component';
import { SlideImgComponent } from './commanComponent/slide-img/slide-img.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import {HttpClientModule} from '@angular/common/http';
import { CardPageComponent } from './commanComponent/card-page/card-page.component';
import { FoooterComponent } from './foooter/foooter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
CartPageComponent,
SlideImgComponent,
CardPageComponent,
FoooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
