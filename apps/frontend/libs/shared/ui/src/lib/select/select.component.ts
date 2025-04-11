import { Component, input, OnInit, output, signal } from '@angular/core';
import { ClickOutsideDirective } from '@anx-store/utils';

@Component({
  selector: 'lib-select',
  imports: [ClickOutsideDirective],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent implements OnInit {
  options = input<string[]>(['option']);
  optionSelected = output<string>();

  protected readonly isOpen = signal(false);
  protected readonly selectedOption = signal('');

  ngOnInit(): void {
    this.selectedOption.set(this.options()[0]);
  }

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
