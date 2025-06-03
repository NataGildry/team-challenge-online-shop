import {
  Component,
  effect,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'shared-price-range',
  imports: [MatSliderModule],
  templateUrl: './price-range.component.html',
  styleUrl: './price-range.component.scss',
})
export class PriceRangeComponent implements OnInit {
  protected readonly lower = signal(0);
  protected readonly higher = signal(0);

  public readonly min = input<number>(1);
  public readonly max = input<number>(100);

  public readonly initialLower = input(10);
  public readonly initialHigher = input(60);

  public readonly rangeChanged = output<{ lower: number; higher: number }>();

  public ngOnInit(): void {
    this.lower.set(this.initialLower());
    this.higher.set(this.initialHigher());

    effect(() => {
      this.rangeChanged.emit({
        lower: this.lower(),
        higher: this.higher(),
      });
    });
  }

  protected inputLower(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const value = Number.parseInt(event.target.value);
      if (!isNaN(value)) {
        this.lower.set(value);
      }
    }
  }
  protected inputHigher(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const value = Number.parseInt(event.target.value);
      if (!isNaN(value)) {
        this.higher.set(value);
      }
    }
  }
}
