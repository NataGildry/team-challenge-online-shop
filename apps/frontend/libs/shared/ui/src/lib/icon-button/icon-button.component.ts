import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'shared-icon-button',
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  public readonly svgIcon = input.required<string>();
  public readonly disabled = input(false);
}
