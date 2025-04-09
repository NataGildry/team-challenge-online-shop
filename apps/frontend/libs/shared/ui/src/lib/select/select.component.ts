import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-select',
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @ViewChild('selectRef') dropdownRef!: ElementRef;
  isOpen = false;
  readonly options = ['eng', 'ukr'];
  selectedOption = 'eng';

  selectOption(item: string): void {
    this.selectedOption = item;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement) {
    const clickedInside =
      this.dropdownRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
