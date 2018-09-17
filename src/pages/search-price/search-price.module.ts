import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPricePage } from './search-price';

@NgModule({
  declarations: [
    SearchPricePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPricePage),
  ],
})
export class SearchPricePageModule {}
