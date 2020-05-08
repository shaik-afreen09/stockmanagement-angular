import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductStockComponent } from './productstock/productstock.component';
import { RawMaterialStockComponent } from './rawmaterialstock/rawmaterialstock.component';
import { ProductTrackComponent } from './product-track/product-track.component';
import { RawmaterialTrackComponent } from './rawmaterial-track/rawmaterial-track.component';
import {  RawmaterialProcessDateComponent } from './rawmaterial-process-date/rawmaterial-process-date.component';
import {RawmaterialUpdateComponent} from './rawmaterial-update/rawmaterial-update.component';

//import { ProductTrackComponent } from './rawmaterial-track/rawmaterial-track.component';
import {  ProductExitDateComponent } from './product-exit-date/product-exit-date.component';
import { ProductUpdateComponent} from './product-update/product-update.component';
const routes: Routes = [
  { path:'productstock', component:ProductStockComponent },
  { path:'rawmaterialstock', component:RawMaterialStockComponent },
{ path:'productTrack', component:ProductTrackComponent},
{ path:'rawmaterialTrack', component:RawmaterialTrackComponent},
{path : 'rawmaterialprocessdate',component:RawmaterialProcessDateComponent},
{path : 'rawmaterialupdate',component:RawmaterialUpdateComponent},
{path :'productexitdate',component:ProductExitDateComponent},
{path : 'productupdate',component:ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
