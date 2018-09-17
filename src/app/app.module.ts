import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InformationCarPage} from "../pages/information-car/information-car";
import { CarsProvider } from '../providers/cars/cars';
import {CardviewCarComponent} from "../components/cardview-car/cardview-car";
import {PipesModule} from "../pipes/pipes.module";
import {HttpClientModule} from "@angular/common/http";
import {SearchPricePage} from "../pages/search-price/search-price";
import { OperationCreditsProvider } from '../providers/operation-credits/operation-credits';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformationCarPage,
    CardviewCarComponent,
    SearchPricePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InformationCarPage,
    SearchPricePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarsProvider,
    OperationCreditsProvider
  ]
})
export class AppModule {}
