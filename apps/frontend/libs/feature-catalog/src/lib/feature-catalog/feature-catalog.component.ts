import { AsyncPipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  cross,
  IconComponent,
  SmallCardComponent,
  SpinnerComponent,
} from '@anx-store/shared/ui';
import { CatalogPaginationComponent } from './catalog-pagination/catalog-pagination.component';
import { RouterOutlet } from '@angular/router';
import { CatalogFacadeService, Product } from '@anx-store/domain';
import { SortSelectComponent } from './sort-select/sort-select.component';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { BehaviorSubject } from 'rxjs';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { CapitalizeFirstWordPipe } from '@anx-store/shared/utils';

const PAGE_SIZE = 9;

@Component({
  selector: 'lib-feature-catalog',
  imports: [
    NgIf,
    AsyncPipe,
    FilterProductComponent,
    SmallCardComponent,
    CatalogPaginationComponent,
    RouterOutlet,
    SortSelectComponent,
    TranslocoDirective,
    SpinnerComponent,
    IconComponent,
    CapitalizeFirstWordPipe,
  ],
  templateUrl: './feature-catalog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatalogComponent {
  protected selectedFilters: string[] = ['High-quality fabric', 'Microfiber'];
  private readonly catalogFacade = inject(CatalogFacadeService);
  private readonly translocoService = inject(TranslocoService);

  protected readonly sortOptions = [
    { name: 'by_popularity', value: 'popularity' },
    { name: 'by_price_increase', value: 'increase' },
    { name: 'by_price_decrease', value: 'decrease' },
  ];

  protected $products = new BehaviorSubject<Product[]>([]);
  protected totalPage = 2;
  protected isLoading = signal(false);
  protected readonly crossIcon = cross;

  public constructor() {
    this.getPage(0);
  }

  protected changetPage(next: number): void {
    this.getPage(next);
  }

  private getPage(page: number): void {
    this.isLoading.set(true);
    this.catalogFacade
      .getProducts(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
      .then((products) => {
        this.$products.next(products);
        this.isLoading.set(false);
      });
  }
}
