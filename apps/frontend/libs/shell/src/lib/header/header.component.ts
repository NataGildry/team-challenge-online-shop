import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';
import { RouterOutlet } from '@angular/router';
import {
  PersonIconComponent,
  SearchIconComponent,
  BasketIconComponent,
} from '@anx-store/ui';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    MatIconModule,
    NavigationItemComponent,
    RouterOutlet,
    PersonIconComponent,
    SearchIconComponent,
    BasketIconComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly routes: { name: string; link: string }[] = [
    { name: 'home', link: '/home' },
    { name: 'catalog', link: '/catalog' },
    { name: 'about us', link: '/about-us' },
  ];
}
