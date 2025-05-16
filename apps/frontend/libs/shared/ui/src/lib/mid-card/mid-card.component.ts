import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { arrow, IconComponent } from '../icon';
import { MidCard } from '@anx-store/shared/utils';

@Component({
  selector: 'shared-mid-card',
  imports: [CommonModule, IconComponent],
  templateUrl: './mid-card.component.html',
})
export class MidCardComponent {
  protected readonly arrow = arrow;
  public dataCard = input.required<MidCard>();
}
