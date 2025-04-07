import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-navigation-item',
  imports: [RouterLink],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.css',
})
export class NavigationItemComponent {
  @Input() name: string = 'link';
  @Input() link: string = '#';
}
