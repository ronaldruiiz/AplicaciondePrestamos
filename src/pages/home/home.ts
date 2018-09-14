import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InformationCarPage} from "../information-car/information-car";
import {StatusBar} from "@ionic-native/status-bar";
import {CarsProvider} from "../../providers/cars/cars";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listcars = [];

  constructor(public navCtrl: NavController,private cars:CarsProvider,private statusbar:StatusBar) {
    this.initializelist();
    this.statusbar.overlaysWebView(false);
    this.statusbar.backgroundColorByHexString("#00ADFF");
  }

  getcars(search)
  {
    return this.cars.getSearchItem(search).subscribe((data)=>this.listcars=data);
  }

  getItems(keysearch: any) {

    const criterion = keysearch.target.value;

    if(criterion && criterion.trim()!='') {
      this.getcars(criterion);
    } else {
      this.initializelist();
    }

  }

  private initializelist() {
    this.getcars("");
  }

  carSeleccionado(car: any) {
    this.navCtrl.push(InformationCarPage,{id:car.id});
  }

}
