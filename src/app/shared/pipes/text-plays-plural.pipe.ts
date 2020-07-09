import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPlaysPlural'
})
export class TextPlaysPluralPipe implements PipeTransform {

  transform(plays: number): string {
    return `${plays} ${plays > 1 ?  'Reproduções' : 'Reprodução'}`;
  }

}
