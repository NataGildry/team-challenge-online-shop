import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import {
  SelectComponent,
  IconComponent,
  iconBasket,
  iconPerson,
  iconSearch,
  SelectOption,
} from '@anx-store/shared/ui';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  CapitalizeFirstWordPipe,
  Langs,
  LocalStorageService,
} from '@anx-store/shared/utils';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    NavigationItemComponent,
    SelectComponent,
    IconComponent,
    TranslocoDirective,
    ReactiveFormsModule,
    RouterLink,
    CapitalizeFirstWordPipe,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly translocoService: TranslocoService =
    inject(TranslocoService);
  private readonly storageService = inject(LocalStorageService);

  protected readonly iconBasket = iconBasket;
  protected readonly iconPerson = iconPerson;
  protected readonly iconSearch = iconSearch;

  protected readonly routes: { name: string; link: string }[] = [
    { name: 'navigation.home', link: '/home' },
    { name: 'navigation.catalog', link: '/catalog' },
    { name: 'navigation.about', link: '/about-us' },
  ];

  protected readonly languageOptions: SelectOption[] = [
    { name: 'eng', value: Langs.ENG },
    { name: 'укр', value: Langs.UKR },
  ];

  protected readonly selectLangControl = new FormControl();

  public constructor() {
    this.selectLangControl.valueChanges
      .pipe(
        tap((lang: string) => {
          if (!lang) return;
          this.translocoService.setActiveLang(lang);
          this.storageService.setCurrentLang(lang);
        }),
        takeUntilDestroyed()
      )
      .subscribe();
    this.selectLangControl.setValue(this.storageService.getCurrentLang());
  }
}
