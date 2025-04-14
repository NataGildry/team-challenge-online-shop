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
  private readonly elementRef: ElementRef = inject(ElementRef);

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    const clickedInside = element.contains(target);
    if (!clickedInside) {
      this.libClickOutside.emit();
    }
  }
}
