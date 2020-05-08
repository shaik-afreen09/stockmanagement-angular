import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductStock } from './productstock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductStockService {

  public constructor(private httpClient:HttpClient){ }
  ps:ProductStock;
   public getOrder(orderId:number)  : Observable<ProductStock>   
   {
      return this.httpClient.get<any>('http://localhost:8012/productstock/getOrder/'+orderId);
   }

   public updateExitDate(exitdate:String,orderid:number) : any
   {
      this.ps= new ProductStock('',0,0,0,0,'','','','','',exitdate,orderid);
    //   this.getOrder(ps:Pr)
      return this.httpClient.put<any>('http://localhost:8012/productstock/updateExitDate',this.ps);
   }
   public updateStock(mandate:String,exitdate:String,orderid:number,quality:string) : any
   {
      this.ps= new ProductStock('',0,0,0,0,'','',mandate,exitdate,quality,'',orderid);
      return this.httpClient.put<any>('http://localhost:8012/productstock/updateStock',this.ps);
   }

  

} 