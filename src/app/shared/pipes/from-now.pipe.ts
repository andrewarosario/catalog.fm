import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(timestamp: number): string {
    moment.locale('pt-br');
    return moment.unix(timestamp).fromNow();
  }

}
