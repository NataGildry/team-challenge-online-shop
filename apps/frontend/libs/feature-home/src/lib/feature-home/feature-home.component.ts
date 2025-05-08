import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  LargeCardComponent,
  SmallCardComponent,
} from '@anx-store/shared/ui';
import { TranslocoService, TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'lib-feature-home',
  imports: [
    ButtonComponent,
    TranslocoDirective,
    SmallCardComponent,
    LargeCardComponent,
  ],
  templateUrl: './feature-home.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomeComponent {
  private readonly translocoService = inject(TranslocoService);
}
