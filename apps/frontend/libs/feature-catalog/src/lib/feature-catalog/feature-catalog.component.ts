import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SmallCardComponent } from '@anx-store/shared/ui';
import { CatalogPaginationComponent } from './catalog-pagination/catalog-pagination.component';
import { RouterOutlet } from '@angular/router';
import { CatalogFacadeService, Product } from '@anx-store/domain';
import { SortSelectComponent } from './sort-select/sort-select.component';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { BehaviorSubject } from 'rxjs';
import { FilterProductComponent } from './filter-product/filter-product.component';

@Component({
  selector: 'lib-feature-catalog',
  imports: [
    CommonModule,
    FilterProductComponent,
    SmallCardComponent,
    CatalogPaginationComponent,
    RouterOutlet,
    SortSelectComponent,
    TranslocoDirective,
  ],
  templateUrl: './feature-catalog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatalogComponent {
  protected selectedFilters: string[] = ['High-quality fabric', 'Microfiber'];
  private readonly catalogFacade = inject(CatalogFacadeService);
  private readonly translocoService = inject(TranslocoService);

  protected $products = new BehaviorSubject<Product[]>([]);
  protected totalPage = 2;

  public constructor() {
    this.catalogFacade.getProducts(0).then((products) => {
      this.$products.next(products);
    });
  }

  protected navigateNextPage(next: number): void {
    this.catalogFacade.getProducts(next);
  }
}
