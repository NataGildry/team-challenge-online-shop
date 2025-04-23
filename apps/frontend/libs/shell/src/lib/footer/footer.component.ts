import { Component, inject } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-footer',
  imports: [TranslocoDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly translocoService: TranslocoService =
    inject(TranslocoService);
}
