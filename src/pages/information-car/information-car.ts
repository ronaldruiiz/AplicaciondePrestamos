import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarsProvider} from "../../providers/cars/cars";

/**
 * Generated class for the InformationCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information-car',
  templateUrl: 'information-car.html',
})
export class InformationCarPage {

  car = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private cars: CarsProvider) {
    this.cars.getCar(this.navParams.get("id")).subscribe((data:any)=>this.car=data);
    console.log(this.car);
  }



}
