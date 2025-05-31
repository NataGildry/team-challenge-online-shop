import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-color-picker',
  imports: [CommonModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css',
})
export class ColorPickerComponent {
  public readonly colorList =
    input.required<{ name: string; hexCode: string }[]>();

  protected readonly value = signal<string[]>([]);

  protected selectColor(hexCode: string): void {
    if (this.value().includes(hexCode)) {
      const newState = this.value().filter((color) => color !== hexCode);
      this.value.set([...newState]);
      console.log(this.value());
    } else {
      const newState = [...this.value(), hexCode];
      this.value.set([...newState]);
      console.log(this.value());
    }
  }
}
