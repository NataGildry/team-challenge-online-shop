import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [MatIconModule, NavigationItemComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  routes: { name: string; link: string }[] = [
    { name: 'home', link: '#' },
    { name: 'catalog', link: '#' },
    { name: 'about us', link: '#' },
  ];
}
