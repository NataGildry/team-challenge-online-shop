import { Component, inject } from '@angular/core';
import { CapitalizeFirstWordPipe } from '@anx-store/shared/utils';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-footer',
  imports: [TranslocoDirective, CapitalizeFirstWordPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly translocoService: TranslocoService =
    inject(TranslocoService);
}
