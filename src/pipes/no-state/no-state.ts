import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NoStatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'noState',
})
export class NoStatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(state: string):string {

    if(state == "not_specified") {
      return "no state";
    } else {
      return state;
    }
  }
}
