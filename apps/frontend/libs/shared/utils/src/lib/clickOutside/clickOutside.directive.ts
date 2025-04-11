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
  private readonly elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.libClickOutside.emit();
    }
  }
}
