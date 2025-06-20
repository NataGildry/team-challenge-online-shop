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
  public readonly height = input<string>('');

  protected readonly sanitizedSvg = computed<SafeHtml>(() => {
    let finalSvg = this.svg();
    if (this.color()) finalSvg = this.changeColor(this.color(), this.svg());
    if (this.height()) finalSvg = this.changeHeigh(this.height(), finalSvg);

    return this.sanitizer.bypassSecurityTrustHtml(finalSvg);
  });

  private changeColor(color: string, svg: string): string {
    return svg
      .replace(/fill="[^"]*"/g, `fill="${color}"`)
      .replace(/stroke="[^"]*"/g, `stroke="${color}"`);
  }

  private changeHeigh(height: string, svg: string): string {
    return svg
      .replace(/width="[^"]*"/g, `width="${height}"`)
      .replace(/height="[^"]*"/g, `height="${height}"`);
  }
}
