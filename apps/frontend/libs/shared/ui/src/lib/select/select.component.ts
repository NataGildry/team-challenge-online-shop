import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
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

  isOpen = signal(false);
  selectedOption = signal('eng');

  selectOption(item: string): void {
    this.selectedOption.set(item);
    this.optionSelected.emit(item);
    this.isOpen.set(false);
  }

  toggleOpen() {
    this.isOpen.set(!this.isOpen());
  }

  close() {
    this.isOpen.set(false);
  }
}
