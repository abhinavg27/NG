import { Pipe, PipeTransform } from '@angular/core';
// {{data | textconvert : upper }}
@Pipe({
  name: 'textconvert'
})
export class TextconvertPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(args[0] === 'upper') {
      return value.toUpperCase();
    } else  if(args[0] === 'lower') {
      return value.toLowerCase();
    } 
    return value.trim();
  }

}
