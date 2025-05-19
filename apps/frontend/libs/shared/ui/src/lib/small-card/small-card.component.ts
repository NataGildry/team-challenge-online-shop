import { Component } from '@angular/core';
import { heartOutline, IconComponent, arrow } from '../icon';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'shared-small-card',
  imports: [IconComponent, IconButtonComponent],
  templateUrl: './small-card.component.html',
})
export class SmallCardComponent {
  protected readonly heart = heartOutline;
  protected readonly arrow = arrow;
}
