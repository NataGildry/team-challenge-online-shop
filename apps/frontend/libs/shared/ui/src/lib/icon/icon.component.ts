import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'shared-icon',
  imports: [],
  template: '<span [innerHTML]="sanitizedSvg()"></span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent {
  private readonly sanitizer = inject(DomSanitizer);

  public readonly svg = input.required<string>();
  public readonly color = input<string>('');

  protected readonly sanitizedSvg = computed<SafeHtml>(() => {
    const finalSvg = this.color()
      ? this.changeColor(this.color(), this.svg())
      : this.svg();

    return this.sanitizer.bypassSecurityTrustHtml(finalSvg);
  });

  private changeColor(color: string, svg: string): string {
    return svg
      .replace(/fill="[^"]*"/g, `fill="${color}"`)
      .replace(/stroke="[^"]*"/g, `stroke="${color}"`);
  }
}
