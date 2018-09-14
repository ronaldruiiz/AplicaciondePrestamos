import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationCarPage } from './information-car';

@NgModule({
  declarations: [
    InformationCarPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationCarPage),
  ],
})
export class InformationCarPageModule {}
