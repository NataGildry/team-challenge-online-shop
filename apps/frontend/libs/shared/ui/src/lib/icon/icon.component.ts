import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'shared-icon',
  imports: [],
  template: '<span [innerHTML]="sanitizedSvg"></span>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent {
  @Input({ required: true }) public set svg(value: string) {
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(value);
  }
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
  protected sanitizedSvg: SafeHtml = '';
}
