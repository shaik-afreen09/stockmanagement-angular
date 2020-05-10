export class RawMaterialStock
{
    name:string;
    pricePerUnit:number;
    quantityValue:number;
    quantityUnit:number;
    price:number;
    warehouseId:string;
    deliveryDate:String;
    manufacturingDate:String;
    expiryDate:String;
    qualityCheck:string;
    processDate:String;
    orderId:number;
    public constructor(name:string,pricePerUnit:number,quantityValue:number,quantityUnit:number,price:number,warehouseId:string,deliveryDate:String,manufacturingDate:String,expiryDate:String,qualityCheck:string,processDate:String,orderId:number)
{
      this.name=name;
      this.pricePerUnit=pricePerUnit;
      this.quantityValue=quantityValue;
      this.quantityUnit=quantityUnit;
      this.price=price;
      this.warehouseId=warehouseId;
      this.deliveryDate=deliveryDate;
      this.manufacturingDate=manufacturingDate;
      this.expiryDate=expiryDate;
      this.qualityCheck=qualityCheck;
      this.processDate=processDate;
      this.orderId=orderId; 
}
}