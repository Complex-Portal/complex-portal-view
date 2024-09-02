import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length = 200): string {
    return value.length > length ? value.substring(0, length - 1) + '…' : value;
  }

}
