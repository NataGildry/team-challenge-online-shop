import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IconComponent,
  dashboard,
  questionMark,
  exit,
  iconBasket,
} from '@anx-store/shared/ui';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'lib-feature-admin',
  imports: [RouterOutlet, IconComponent, RouterLink, TranslocoDirective],
  templateUrl: './feature-admin.component.html',
})
export class FeatureAdminComponent {
  protected readonly exitIcon = exit;

  protected readonly layouts = [
    { name: 'dashboard', icon: dashboard, linkTo: 'dashboard' },
    { name: 'product', icon: iconBasket, linkTo: 'product' },
    { name: 'help', icon: questionMark, linkTo: 'help' },
  ];
}
