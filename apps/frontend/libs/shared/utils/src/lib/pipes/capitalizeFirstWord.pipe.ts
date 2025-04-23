import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstWord',
})
export class CapitalizeFirstWordPipe implements PipeTransform {
  public transform(value: string): string {
    if (!value) return '';
    const [first, ...rest] = value.split(' ');
    return (
      first.charAt(0).toUpperCase() + first.slice(1) + ' ' + rest.join(' ')
    );
  }
}
