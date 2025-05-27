import { Component, inject } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'shared-large-card',
  imports: [TranslocoDirective],
  templateUrl: './large-card.component.html',
})
export class LargeCardComponent {
  private readonly translocoService = inject(TranslocoService);
}
