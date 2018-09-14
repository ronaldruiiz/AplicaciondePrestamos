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
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cars: CarsProvider) {
    if (this.navParams.get("id")) {
      this.id = this.navParams.get("id");
      console.log(this.id);
      this.cars.getCar(this.id.toString()).subscribe((data)=>{
        this.car = data;
        console.log(this.car);
      });
    }

  }



}
