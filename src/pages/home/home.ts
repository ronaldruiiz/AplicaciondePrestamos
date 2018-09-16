import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {InformationCarPage} from "../information-car/information-car";
import {StatusBar} from "@ionic-native/status-bar";
import {CarsProvider} from "../../providers/cars/cars";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listcars = [];
  estado = "usado"

  constructor(public navCtrl: NavController,private cars:CarsProvider,private statusbar:StatusBar) {
    this.initializeList();
    this.statusbar.backgroundColorByHexString("#00ADFF");
  }

  getSearchcars(search)
  {
      this.cars.getSearchItem(search,this.estado).subscribe((data)=>this.listcars=data);
  }

  getItems(keysearch: any) {

    const criterion = keysearch.target.value;

    if(criterion && criterion.trim()!='') {

      this.getSearchcars(criterion);

    } else {
      this.initializeList();
    }

  }

  public initializeList() {

      this.getSearchcars("");

  }

  carSeleccionado(car: any) {
    this.navCtrl.push(InformationCarPage,{id:car.id});
  }

  swipEvent(slices:any ) {
    if (this.estado == "nuevo") {

      this.estado="usado";
    }
    else{
      this.estado="nuevo";
    }
    this.getSearchcars("");
  }

  opensearchprice() {

  }

}
