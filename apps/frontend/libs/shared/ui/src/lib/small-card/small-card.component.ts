import { Component, input } from '@angular/core';
import { heartOutline, IconComponent, arrow } from '../icon';
import { ButtonComponent } from '../button/button.component';
import { SmallCard } from '@anx-store/shared/utils';

@Component({
  selector: 'shared-small-card',
  imports: [IconComponent, ButtonComponent],
  templateUrl: './small-card.component.html',
})
export class SmallCardComponent {
  protected readonly heart = heartOutline;
  protected readonly arrow = arrow;

  public cardData = input.required<SmallCard>();
}
