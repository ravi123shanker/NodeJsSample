import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CartComponent } from './cart/cart.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { Router } from './app.routing';
import { TempdrivenComponent } from './forms/tempdriven/tempdriven.component';
import { DatadrivenComponent } from './forms/datadriven/datadriven.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    NavHeaderComponent,
    CartComponent,
    MyCartComponent,
    TempdrivenComponent,
    DatadrivenComponent
  ],
  imports: [
    BrowserModule,
    Router,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
