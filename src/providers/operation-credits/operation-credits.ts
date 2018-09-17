import { Injectable } from '@angular/core';

/*
  Generated class for the OperationCreditsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperationCreditsProvider {

  constructor() {

  }

  calculateMetodAleman(informationUser:any){
    let cDE = this.indebtednessCapacity(informationUser.ingresos,informationUser.gastos);
    let share = informationUser.cantidad / (informationUser.anioPrestamo*12);

    return cDE-share;
  }


  indebtednessCapacity(ingresos:number = 0, gastos: number = 0){
    return (ingresos-gastos)*0.40;
  }

}
