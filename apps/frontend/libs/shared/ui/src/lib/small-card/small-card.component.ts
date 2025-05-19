import { Component, input } from '@angular/core';
import { heartOutline, IconComponent, arrow } from '../icon';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { Product } from '@anx-store/types';

@Component({
  selector: 'shared-small-card',
  imports: [IconComponent, IconButtonComponent],
  templateUrl: './small-card.component.html',
})
export class SmallCardComponent {
  protected readonly heart = heartOutline;
  protected readonly arrow = arrow;

  public readonly product = input.required<Product>();
}
