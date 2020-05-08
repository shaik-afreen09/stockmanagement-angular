import { Component, OnInit } from '@angular/core';
import {RawMaterialStockService} from '../rawmaterialstock/rawmaterialstock.service';
@Component({
  selector: 'app-rawmaterial-update',
  templateUrl: './rawmaterial-update.component.html',
  styleUrls: ['./rawmaterial-update.component.css']
})
export class RawmaterialUpdateComponent implements OnInit {

  constructor(private rawservice:RawMaterialStockService) { }

  ngOnInit(): void {
  }
  updatedata(data)
  {
    this.rawservice.updateStock(data.rawid,data.mandate,data.exitdate).subscribe((data)=>{
      console.log(data);
  
    },error=>{console.log(error.error.text);
  
  
      if(error.error.text=="Updated Stock Sucessfully")
      alert("Data Updated Succesfully");
      else
      alert("Data not Updated Succesfully");
      
      
      
      
      });
  }
}
