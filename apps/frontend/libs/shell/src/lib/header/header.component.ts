import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { RouterOutlet } from '@angular/router';
import {
  SelectComponent,
  SharedIconComponent,
  iconBasket,
  iconPerson,
  iconSearch,
} from '@anx-store/ui';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    MatIconModule,
    NavigationItemComponent,
    RouterOutlet,
    SelectComponent,
    SharedIconComponent,
    TranslocoDirective,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly routes: { name: string; link: string }[] = [
    { name: 'home', link: '/home' },
    { name: 'catalog', link: '/catalog' },
    { name: 'about', link: '/about-us' },
  ];
  protected readonly iconBasket = iconBasket;
  protected readonly iconPerson = iconPerson;
  protected readonly iconSearch = iconSearch;

  protected readonly languageOptions = [
    { name: 'eng', value: 'en' },
    { name: 'укр', value: 'uk' },
  ];

  private transloco: TranslocoService = inject(TranslocoService);

  protected swithcLanguage(lang: string): void {
    this.transloco.setActiveLang(lang);
  }
}
