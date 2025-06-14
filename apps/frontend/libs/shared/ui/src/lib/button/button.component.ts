import { Component, input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  imports: [TranslocoModule],
})
export class ButtonComponent {
  public readonly label = input.required<string>();
  public readonly disabled = input(false);
  public readonly color = input<'black' | 'primary'>('primary');
}
