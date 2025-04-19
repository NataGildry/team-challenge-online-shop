import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
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
export class HeaderComponent implements OnInit {
  private translocoService: TranslocoService = inject(TranslocoService);

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

  private readonly currentLang = Langs.ENG;

  protected readonly selectLangControl = new FormControl();

  public ngOnInit(): void {
    this.selectLangControl.valueChanges.subscribe((lang: string | null) => {
      if (!lang) return;
      this.translocoService.setActiveLang(lang);
    });
    this.selectLangControl.setValue(this.currentLang);
  }
}
