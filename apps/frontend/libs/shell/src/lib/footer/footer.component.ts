import { Component, inject } from '@angular/core';
import {
  IconComponent,
  instagramLogo,
  telegramLogo,
  twitterLogo,
} from '@anx-store/shared/ui';
import { CapitalizeFirstWordPipe } from '@anx-store/shared/utils';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { FooterLinkComponent } from './footer-link/footer-link.component';

@Component({
  selector: 'lib-footer',
  imports: [
    TranslocoDirective,
    CapitalizeFirstWordPipe,
    IconComponent,
    FooterLinkComponent,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private readonly translocoService = inject(TranslocoService);

  protected readonly email = 'comfortwave@gmail.com';
  protected readonly phone = '+380973458787';
  protected readonly instagram = instagramLogo;
  protected readonly telegram = telegramLogo;
  protected readonly twitter = twitterLogo;

  protected copyLink(link: string): void {
    navigator.clipboard.writeText(link).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  }
}
