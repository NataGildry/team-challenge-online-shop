import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { RouterOutlet } from '@angular/router';
import {
  SelectComponent,
  IconComponent,
  iconBasket,
  iconPerson,
  iconSearch,
} from '@anx-store/shared/ui';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    NavigationItemComponent,
    RouterOutlet,
    SelectComponent,
    IconComponent,
    TranslocoDirective,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private translocoService: TranslocoService = inject(TranslocoService);

  protected readonly iconBasket = iconBasket;
  protected readonly iconPerson = iconPerson;
  protected readonly iconSearch = iconSearch;

  protected readonly routes: { name: string; link: string }[] = [
    { name: 'home', link: '/home' },
    { name: 'catalog', link: '/catalog' },
    { name: 'about', link: '/about-us' },
  ];

  protected readonly languageOptions = [
    { name: 'eng', value: 'en' },
    { name: 'укр', value: 'uk' },
  ];

  protected switchLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
