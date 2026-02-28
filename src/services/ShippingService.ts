import { IShippingService } from "./IShippingService";

export class ShippingService implements IShippingService {

  calculateCost(weight: number): number {

    if (weight <= 0) {
      throw new Error("El peso debe ser mayor a 0");
    }

    if (weight <= 5) {
      return 10000;
    }

    if (weight <= 20) {
      return 20000;
    }
    
    if(weight >20 && weight <=40){
        return 40000;
    }

    else  return 50000;
   
  }

}