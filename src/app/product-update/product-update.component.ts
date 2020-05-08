import { Component, OnInit } from '@angular/core';
import { ProductStockService } from '../productstock/productstock.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductStockService) { }

  ngOnInit(): void {
  }

  updateproduct(data)
{


this.productService.updateStock(data.mandate,data.expirydate,data.productid,data.quality).subscribe((data)=>console.log(data),
error=>{console.log(error.error.text);
  
  
  if(error.error.text==" Updated Stock Sucessfully")
  alert("Data Updated Succesfully");
  else
  alert("Data not Updated Succesfully");
  
  
  
  
  });



}
}
