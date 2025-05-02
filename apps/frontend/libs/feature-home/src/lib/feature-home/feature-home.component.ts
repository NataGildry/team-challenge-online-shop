import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@anx-store/shared/ui';

@Component({
  selector: 'lib-feature-home',
  imports: [ButtonComponent],
  templateUrl: './feature-home.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styles: [':host {display: flex;}'],
})
export class FeatureHomeComponent {}
