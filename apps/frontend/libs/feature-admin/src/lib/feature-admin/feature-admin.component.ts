import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { angle, ButtonComponent, IconComponent ,
  dashboard,
  questionMark,
  exit,
  iconBasket,
} from '@anx-store/shared/ui';

@Component({
  selector: 'lib-feature-admin',
  imports: [RouterOutlet, RouterLink, ButtonComponent, IconComponent],
  templateUrl: './feature-admin.component.html',
})
export class FeatureAdminComponent {
  protected readonly dashboardIcon = dashboard;
  protected readonly productBasketIcon = iconBasket;
  protected readonly questionMarkIcon = questionMark;
  protected readonly exitIcon = exit;
  protected readonly angleIcon = angle;
}
