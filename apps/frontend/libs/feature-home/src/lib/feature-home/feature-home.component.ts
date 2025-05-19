import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  LargeCardComponent,
  MidCardComponent,
  SmallCardComponent,
} from '@anx-store/shared/ui';
import { TranslocoService, TranslocoDirective } from '@jsverse/transloco';
import { CatalogService, MidCard } from '@anx-store/shared/utils';

@Component({
  selector: 'lib-feature-home',
  imports: [
    ButtonComponent,
    TranslocoDirective,
    SmallCardComponent,
    LargeCardComponent,
    MidCardComponent,
  ],
  templateUrl: './feature-home.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomeComponent {
  private readonly translocoService = inject(TranslocoService);
  private readonly catalogService = inject(CatalogService);

  protected readonly cardItems: MidCard[] = this.catalogService.getMidCards();

  protected readonly smallCards = this.catalogService
    .getSmallCards(0)
    .slice(0, 3);
}
