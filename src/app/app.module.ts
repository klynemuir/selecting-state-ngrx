import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { reducer } from "./reducers/index.reducer";

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({authentication: reducer})],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
