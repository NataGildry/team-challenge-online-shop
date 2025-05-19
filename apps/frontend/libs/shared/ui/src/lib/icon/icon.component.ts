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

  public readonly sanitizedSvg = computed<SafeHtml>(() => {
    const svgValue = this.svg();
    const colorValue = this.color();

    const finalSvg = colorValue
      ? this.changeColor(colorValue, svgValue)
      : svgValue;

    return this.sanitizer.bypassSecurityTrustHtml(finalSvg);
  });

  private changeColor(color: string, svg: string): string {
    return svg
      .replace(/fill="white"/g, `fill="${color}"`)
      .replace(/stroke="white"/g, `stroke="${color}"`);
  }
}
