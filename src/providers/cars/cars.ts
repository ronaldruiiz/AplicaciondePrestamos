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

  public getSearchItem(criterion: string,condition: string) {
    let estate = "used";
    let urlSearch;
    if(condition == "nuevo") {
      estate = "new";
    }
    urlSearch = "sites/MEC/search?q="+criterion+"&category=MEC1744"+"&condition="+estate;

    return this.getQuery(urlSearch).pipe(map((item: any)=>item.results));
  }

  public getCar(id?: any) {
    let urlId = "items/"+id;
    return this.getQuery(urlId);
  }

  public getQuery(query: string) {
    let url: string = "https://api.mercadolibre.com/";
    return this.http.get(url+query);
  }

}
