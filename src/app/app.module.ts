import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {MaterialModule} from './material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    SlimLoadingBarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
