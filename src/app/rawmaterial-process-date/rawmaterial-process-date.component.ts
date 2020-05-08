import { Component, OnInit } from '@angular/core';
import {RawMaterialStockService} from '../rawmaterialstock/rawmaterialstock.service';

@Component({
  selector: 'app-rawmaterial-process-date',
  templateUrl: './rawmaterial-process-date.component.html',
  styleUrls: ['./rawmaterial-process-date.component.css'],

  providers:[RawMaterialStockService],

})
export class RawmaterialProcessDateComponent implements OnInit {

  constructor(private rawservice:RawMaterialStockService) { }

  ngOnInit(): void {
  }

processupdate(data)
{
 // this.rms.orderId=data.rawid;
 // this.rms.processDate=data.rawdate;
  
  this.rawservice.updateProcessDate(data.rawid,data.rawdate).subscribe((data)=>{
    

  },error=>{console.log(error.error.text);
  
  
  if(error.error.text=="Process Date Modified")
  alert("Data Updated Succesfully");
  else
  alert("Data not Updated Succesfully");
  
  
  
  
  })
}

}
