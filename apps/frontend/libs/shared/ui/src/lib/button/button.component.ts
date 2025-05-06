import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'shared-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public readonly text = input.required<string>();
  public readonly disabled = input(false);
}
