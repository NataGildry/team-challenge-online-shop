import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'lib-shared-icon',
  imports: [CommonModule],
  template: '<span [innerHTML]="sanitizedSvg"></span>',
  styleUrl: './shared-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedIconComponent {
  @Input({ required: true }) set svg(value: string) {
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(value);
  }

  protected sanitizedSvg: SafeHtml = '';

  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
}
