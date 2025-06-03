import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  LargeCardComponent,
  MidCardComponent,
  SmallCardComponent,
} from '@anx-store/shared/ui';
import { TranslocoService, TranslocoDirective } from '@jsverse/transloco';
import { HomeFacadeService, Product } from '@anx-store/domain';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-home',
  imports: [
    ButtonComponent,
    TranslocoDirective,
    SmallCardComponent,
    LargeCardComponent,
    MidCardComponent,
    CommonModule,
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

  protected $products = new BehaviorSubject<Product[]>([]);

  public constructor() {
    this.homeFacade.getProducts(3).then((products) => {
      this.$products.next(products);
    });
  }
}
