import { Component, inject } from '@angular/core';
import {
  IconComponent,
  instagramLogo,
  telegramLogo,
  twitterLogo,
} from '@anx-store/shared/ui';
import { CapitalizeFirstWordPipe } from '@anx-store/shared/utils';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-footer',
  imports: [TranslocoDirective, CapitalizeFirstWordPipe, IconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private readonly translocoService: TranslocoService =
    inject(TranslocoService);
  public readonly instagram = instagramLogo;
  public readonly telegram = telegramLogo;
  public readonly twitter = twitterLogo;
}
