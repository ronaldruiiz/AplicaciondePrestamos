import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LengthTitlePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'lengthTitle',
})
export class LengthTitlePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(title: string):string {
    return title.substr(0,15);
  }
}
