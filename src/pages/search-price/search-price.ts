import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {OperationCreditsProvider} from "../../providers/operation-credits/operation-credits";

/**
 * Generated class for the SearchPricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-price',
  templateUrl: 'search-price.html',
})
export class SearchPricePage {


  anios: number[] = [1, 2, 3, 4];
  user = {
  anioPrestamo:1,
  ingresos:0,
  gastos:0,
  cantidad:0,
  metodo:"aleman",
  interes:(5/100)
  }



  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController,private operation:OperationCreditsProvider,private toastCtrl: ToastController) {
  }
  public dismiss() {
    this.viewCtrl.dismiss(this.user.cantidad);
  }


  indebtedness() {
    let rest = this.operation.calculateMetodAleman(this.user);
    if (rest <= 0) {
      let toast = this.toastCtrl.create(
        {
          message:"No dispone del valor a pagar",
          duration: 3000,
          position: 'bottom'
        }
          );
      toast.present();
    } else {
      this.viewCtrl.dismiss(this.user.cantidad);
    }
  }

}
