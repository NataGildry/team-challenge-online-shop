import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'lib-shared-icon',
  imports: [CommonModule],
  template: '<span [innerHTML]="sanitizedSvg"></span>',
  styleUrl: './shared-icon.component.css',
})
export class SharedIconComponent {
  defauldSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m800-274-40-40v-421.38q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H314l-40-40h461.38q27.62 0 46.12 18.5Q800-763 800-735.38V-274Zm19.69 190.31L743.38-160H224.62q-27.62 0-46.12-18.5Q160-197 160-224.62v-518.76l-76.31-76.31L112-848l736 736-28.31 28.31ZM300-300l78.46-103.08 70 84.62L509.15-394 200-703.15v478.53q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h478.53l-100-100H300Zm237-237Zm-85.31 85.31Z"/></svg>';
  @Input() set svg(value: string) {
    if (!value) return;
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(value);
  }
  sanitizedSvg: SafeHtml = '';

  private sanitizer: DomSanitizer = inject(DomSanitizer);

  constructor() {
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(this.defauldSvg);
  }
}
