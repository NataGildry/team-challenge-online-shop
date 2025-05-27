import { Component, input } from '@angular/core';
import { arrow, IconComponent } from '../icon';
import { MidCard } from '@anx-store/domain';

@Component({
  selector: 'shared-mid-card',
  imports: [IconComponent],
  templateUrl: './mid-card.component.html',
})
export class MidCardComponent {
  protected readonly arrow = arrow;
  public dataCard = input.required<MidCard>();
}
