import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'lib-shared-icon',
  imports: [CommonModule],
  template: '<span [innerHTML]="sanitizedSvg"></span>',
  styleUrl: './shared-icon.component.css',
})
export class SharedIconComponent {
  @Input() set svg(value: string) {
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(value);
  }
  sanitizedSvg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}
}
