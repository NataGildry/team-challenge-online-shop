import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconComponent } from '../icon';

@Component({
  selector: 'shared-button',
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  public readonly content = input.required<string>();
  public readonly disabled = input(false);
  public readonly iconMode = input(false);
  public readonly blackMode = input(false);
}
