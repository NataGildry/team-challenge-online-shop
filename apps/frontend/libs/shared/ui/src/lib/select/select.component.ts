import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClickOutsideDirective } from '@anx-store/utils';

@Component({
  selector: 'lib-select',
  imports: [ClickOutsideDirective],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() options: string[] = ['eng', 'ukr'];
  @Output() optionSelected = new EventEmitter<string>();

  isOpen = false;
  selectedOption = 'eng';

  selectOption(item: string): void {
    this.selectedOption = item;
    this.optionSelected.emit(item);
    this.isOpen = false;
  }

  close() {
    this.isOpen = false;
  }
}
