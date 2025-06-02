import { Component, signal } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'lib-price-range',
  imports: [MatSliderModule],
  templateUrl: './price-range.component.html',
  styleUrl: './price-range.component.scss',
})
export class PriceRangeComponent {
  protected readonly min = 1;
  protected readonly max = 1700;

  protected lower = signal(100);
  protected higher = signal(500);

  protected inputLower(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.lower.set(Number.parseInt(event.target.value));
    }
  }
  protected inputHigher(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.higher.set(Number.parseInt(event.target.value));
    }
  }
}
