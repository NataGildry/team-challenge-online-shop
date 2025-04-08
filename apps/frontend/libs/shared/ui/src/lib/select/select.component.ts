import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-select',
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  isOpen = false;
  readonly options = ['eng', 'ukr'];
  selectedOption = 'eng';

  selectOption(item: string): void {
    this.selectedOption = item;
    this.isOpen = false;
  }
}
