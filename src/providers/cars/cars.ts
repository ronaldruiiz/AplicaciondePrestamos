import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

/*
  Generated class for the CarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarsProvider {

  constructor(public http: HttpClient) {

  }

  public getSearchItem(criterion: string) {
    let urlSearch = "/sites/MEC/search?q="+criterion+"&category=MEC1744"
    return this.getQuery(urlSearch).pipe(map((item: any)=>item.results));
  }

  public getCar(id:string) {
    let urlId = "/items/"+id;
    return this.getQuery(urlId);
  }

  public getQuery(query: string) {
    let url: string = "https://api.mercadolibre.com";
    return this.http.get(url+query);
  }

}
