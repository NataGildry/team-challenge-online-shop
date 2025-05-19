import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public readonly content = input.required<string>();
  public readonly disabled = input(false);
  public readonly blackMode = input(false);
}
