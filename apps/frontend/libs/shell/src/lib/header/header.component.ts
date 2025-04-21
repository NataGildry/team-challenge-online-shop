import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { RouterOutlet } from '@angular/router';
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
import { Langs } from '@anx-store/shared/utils';
import { Subject, takeUntil, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    NavigationItemComponent,
    RouterOutlet,
    SelectComponent,
    IconComponent,
    TranslocoDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy {
  private readonly CURRENT_LANGUAGE_KEY = 'currentLangugeAnxSotre';

  private readonly translocoService: TranslocoService =
    inject(TranslocoService);

  protected readonly iconBasket = iconBasket;
  protected readonly iconPerson = iconPerson;
  protected readonly iconSearch = iconSearch;

  protected readonly routes: { name: string; link: string }[] = [
    { name: 'home', link: '/home' },
    { name: 'catalog', link: '/catalog' },
    { name: 'about', link: '/about-us' },
  ];

  protected readonly languageOptions: SelectOption[] = [
    { name: 'eng', value: Langs.ENG },
    { name: 'укр', value: Langs.UKR },
  ];

  protected readonly selectLangControl = new FormControl();

  private destroy$ = new Subject<void>();

  private stor = inject(PLATFORM_ID);

  public constructor() {
    this.selectLangControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .pipe(
        tap((lang: string) => {
          if (!lang) return;
          this.translocoService.setActiveLang(lang);
          this.saveLanguage(lang);
        })
      )
      .subscribe();
    if (isPlatformBrowser(this.stor)) {
      this.selectLangControl.setValue(
        localStorage.getItem(this.CURRENT_LANGUAGE_KEY)
      );
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private saveLanguage(lang: string): void {
    localStorage.setItem(this.CURRENT_LANGUAGE_KEY, lang);
  }
}
