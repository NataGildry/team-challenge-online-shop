import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  LargeCardComponent,
  MidCardComponent,
  SmallCardComponent,
} from '@anx-store/shared/ui';
import { TranslocoService, TranslocoDirective } from '@jsverse/transloco';
import { HomeFacadeService } from '@anx-store/domain';

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
  private readonly homeFacade = inject(HomeFacadeService);

  protected readonly cardItems: { title: string; imgLink: string }[] =
    this.homeFacade.getMidCards();

  protected readonly smallCards = this.homeFacade.getSmallCards(0).slice(0, 3);
}
