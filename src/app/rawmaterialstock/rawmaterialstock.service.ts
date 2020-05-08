import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawMaterialStock } from './rawmaterialstock';
import { Injectable } from '@angular/core';
@Injectable({
   providedIn:'root'
})
export class RawMaterialStockService
{
   public constructor(private httpClient:HttpClient){ }
   rms:RawMaterialStock;
   public getOrder(orderId:number)  : Observable<RawMaterialStock>   
   {
      return this.httpClient.get<any>('http://localhost:8012/rawmaterial/getOrder/'+orderId);
   }

   public updateProcessDate(rawid:number,rawdate:String) : any
   {
      this.rms = new RawMaterialStock('',0,0,0,0,'','','','','',rawdate,rawid);
      return this.httpClient.put<any>('http://localhost:8012/rawmaterial/updateProcessDate',this.rms);
   }
   public updateStock(rawid:number,mandate:String,exitdate:String) : any
   {
      this.rms = new RawMaterialStock('',0,0,0,0,'','',mandate,exitdate,'','',rawid);
      return this.httpClient.put<any>('http://localhost:8012/rawmaterial/updateStock',this.rms);
   }

  

} 