import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public readonly text = input('button');
}
