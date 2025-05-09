import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  LargeCardComponent,
  MidCardComponent,
  SmallCardComponent,
} from '@anx-store/shared/ui';
import { TranslocoService, TranslocoDirective } from '@jsverse/transloco';
import { MidCard } from '@anx-store/shared/utils';

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

  protected readonly cardItems: MidCard[] = [
    {
      title: 'Armchairs and sofas',
      imgLink: 'https://i.imgur.com/9xo3v7p.jpeg',
    },
    { title: 'Beds and futons', imgLink: 'https://i.imgur.com/9xo3v7p.jpeg' },
    {
      title: 'Chairs and semi-chairs',
      imgLink: 'https://i.imgur.com/9xo3v7p.jpeg',
    },
    { title: 'Kids furniture', imgLink: 'https://i.imgur.com/9xo3v7p.jpeg' },
  ];
}
