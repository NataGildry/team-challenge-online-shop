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

  public readonly email = 'comfortwave@gmail.com';
  public readonly phone = '+380973458787';
  public readonly instagram = instagramLogo;
  public readonly telegram = telegramLogo;
  public readonly twitter = twitterLogo;

  protected copyLink(link: string): void {
    navigator.clipboard.writeText(link).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  }
}
