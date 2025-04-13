import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  output,
} from '@angular/core';

@Directive({
  selector: '[libClickOutside]',
})
export class ClickOutsideDirective {
  public readonly libClickOutside = output();
  private readonly elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.libClickOutside.emit();
    }
  }
}
