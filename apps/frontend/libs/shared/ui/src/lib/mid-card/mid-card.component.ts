import { Component, input } from '@angular/core';
import { arrow, IconComponent } from '../icon';

@Component({
  selector: 'shared-mid-card',
  imports: [IconComponent],
  templateUrl: './mid-card.component.html',
})
export class MidCardComponent {
  public readonly dataCard = input.required<{
    title: string;
    imgLink: string;
  }>();

  protected readonly arrow = arrow;
}
