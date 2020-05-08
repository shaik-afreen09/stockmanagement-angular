import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductStockComponent } from './productstock/productstock.component';
import { RawMaterialStockComponent } from './rawmaterialstock/rawmaterialstock.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RawmaterialTrackComponent } from './rawmaterial-track/rawmaterial-track.component';
import { RawmaterialProcessDateComponent } from './rawmaterial-process-date/rawmaterial-process-date.component';
import { ProductExitDateComponent } from './product-exit-date/product-exit-date.component';
import { RawmaterialUpdateComponent } from './rawmaterial-update/rawmaterial-update.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductTrackComponent } from './product-track/product-track.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductStockComponent,
    RawMaterialStockComponent,
    RawmaterialTrackComponent,
    RawmaterialProcessDateComponent,
    ProductExitDateComponent,
    RawmaterialUpdateComponent,
    ProductUpdateComponent,
    ProductTrackComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   // NgModule,
   // ProductStockComponent,
   // RawMaterialStockComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
