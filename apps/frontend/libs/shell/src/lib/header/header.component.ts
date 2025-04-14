import { ChangeDetectionStrategy, Component } from '@angular/core';
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

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    MatIconModule,
    NavigationItemComponent,
    RouterOutlet,
    SelectComponent,
    SharedIconComponent,
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly routes: { name: string; link: string }[] = [
    { name: 'home', link: '/home' },
    { name: 'catalog', link: '/catalog' },
    { name: 'about us', link: '/about-us' },
  ];
  protected readonly iconBasket = iconBasket;
  protected readonly iconPerson = iconPerson;
  protected readonly iconSearch = iconSearch;

  protected readonly languageOptions = ['eng', 'укр'];
}
