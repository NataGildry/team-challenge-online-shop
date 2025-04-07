import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-navigation-item',
  imports: [RouterLink],
  templateUrl: './navigation-item.component.html',
  standalone: true,
})
export class NavigationItemComponent {
  public readonly name = input<string>('/');
  public readonly link = input<string>('#');
}
