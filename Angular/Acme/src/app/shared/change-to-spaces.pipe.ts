import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'changeToSapce'
})
// tslint:disable-next-line:class-name
export class changeToSapce implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
