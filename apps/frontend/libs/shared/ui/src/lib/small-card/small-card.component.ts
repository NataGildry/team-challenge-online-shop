import { Component, input } from '@angular/core';
import { heartOutline, IconComponent, arrow } from '../icon';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { Product } from '@anx-store/domain';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-small-card',
  imports: [IconComponent, IconButtonComponent, RouterLink],
  templateUrl: './small-card.component.html',
})
export class SmallCardComponent {
  protected readonly heart = heartOutline;
  protected readonly arrow = arrow;

  public readonly product = input.required<Product>();
}
