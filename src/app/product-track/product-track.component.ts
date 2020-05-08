import { Component, OnInit } from '@angular/core';
import { ProductStock } from '../productstock/productstock';
import { ProductStockService } from '../productstock/productstock.service';
@Component({
  selector: 'app-product-track',
  templateUrl: './product-track.component.html',
  styleUrls: ['./product-track.component.css'],providers:[ProductStockService]
})
export class ProductTrackComponent implements OnInit {
  data:ProductStock = new ProductStock('',0,0,0,0,'','','','','','',0)
  constructor(private productService: ProductStockService) { }
test:string;
  ngOnInit(): void {
  }
requestdata(data){

console.log(data);
if(data.productid==null)
this.test=`<script>alert('Please Enter Product Id');`;
 // alert(data.productid);
  this.productService.getOrder(data.productid).subscribe((data)=>{
console.log(data.name);
this.data=data;
this.test=`<h2 style="text-align:justify">Product Stock Details </h2> 
<table class="table table-striped col-md-6 container">
   <center> <tr>
      <th>Order Id: ${data.orderId}</th>
   </tr>
   <tr>
      <th>Product Name: ${data.name}</th>
   </tr>
   <tr>
      <th>Price Per Unit: ${data.pricePerUnit}</th>
   </tr>
   <tr>
      <th>Quantity Value: ${data.quantityValue}</th>
   </tr>
   <tr>
       <th>Quantity Unit: ${data.quantityUnit}</th>
    </tr>
    <tr>
       <th>Price: ${data.price}</th>
    </tr>
    <tr>
       <th>Warehouse Id
       : ${data.warehouseId}</th>
    </tr>
    <tr>
       <th>Delivery Date
       : ${data.deliveryDate}</th>
    </tr>
    <tr>
       <th>Manufacturing Date
       : ${data.manufacturingDate}</th>
    </tr>
    <tr>
       <th>Expiry Date
       : ${data.expiryDate}</th>
    </tr>
    <tr>
       <th>Quality Check
       : ${data.qualityCheck}</th>
    </tr>
    <tr>
       <th>Exit Date
       : ${data.exitDate}</th>
    </tr>
  </center>
</table>`;
  },error=>{
    alert('Please Enter Correct Product Id. Entered Product id is Invalid');
    
    
    
    
    });
}
}
