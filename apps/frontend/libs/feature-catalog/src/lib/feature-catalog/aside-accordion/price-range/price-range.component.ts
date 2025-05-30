import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-price-range',
  imports: [CommonModule],
  templateUrl: './price-range.component.html',
})
export class PriceRangeComponent {
  protected readonly min = 1;
  protected readonly max = 1000;

  // protected inputRange(event: any): void {
  //   console.log(event);
  // }
}
