import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Input,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'shared-icon',
  imports: [],
  template: '<span [innerHTML]="sanitizedSvg"></span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent implements OnInit {
  @Input({ required: true }) public set svg(value: string) {
    this.rawSvg = value;
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  private rawSvg = '';
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);

  protected sanitizedSvg: SafeHtml = '';
  public readonly color = input<string>('');

  public ngOnInit(): void {
    if (this.color()) {
      this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(
        this.changeColor(this.color(), this.rawSvg)
      );
    }
  }

  private changeColor(color: string, svg: string): string {
    const repainted = svg
      .replace(/fill="white"/g, `fill="${color}"`)
      .replace(/stroke="white"/g, `stroke="${color}"`);
    return repainted;
  }
}
