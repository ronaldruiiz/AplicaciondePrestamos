import {Component, Input} from '@angular/core';

/**
 * Generated class for the CardviewCarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardview-car',
  templateUrl: 'cardview-car.html'
})
export class CardviewCarComponent {

  @Input() car = {};

  constructor() {
  }
  }

