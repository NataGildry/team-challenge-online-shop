import { Component, input } from '@angular/core';
import { arrow, IconComponent } from '../icon';

export interface MidCard {
  title: string;
  imgLink: string;
}

@Component({
  selector: 'shared-mid-card',
  imports: [IconComponent],
  templateUrl: './mid-card.component.html',
})
export class MidCardComponent {
  public readonly dataCard = input.required<MidCard>();

  protected readonly arrow = arrow;
}
