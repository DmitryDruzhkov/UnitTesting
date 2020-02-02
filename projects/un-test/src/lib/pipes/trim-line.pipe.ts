import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimLine'
})
export class TrimLinePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.substr(0, 10);
  }

}
