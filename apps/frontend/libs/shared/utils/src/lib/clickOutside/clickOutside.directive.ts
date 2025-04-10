import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Output,
} from '@angular/core';

@Directive({
  selector: '[libClickOutside]',
})
export class ClickOutsideDirective {
  @Output() libClickOutside = new EventEmitter<void>();
  elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.libClickOutside.emit();
    }
  }
}
