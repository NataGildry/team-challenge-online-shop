import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
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
import { Observable, tap } from 'rxjs';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { CapitalizeFirstWordPipe } from '@anx-store/shared/utils';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const PAGE_SIZE = 9;

@Component({
  selector: 'lib-feature-catalog',
  imports: [
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
  private readonly destroyRef = inject(DestroyRef);

  protected readonly sortOptions = [
    { name: 'by_popularity', value: 'popularity' },
    { name: 'by_price_increase', value: 'increase' },
    { name: 'by_price_decrease', value: 'decrease' },
  ];

  protected products$!: Observable<Product[]>;
  protected totalPage$!: Observable<number>;
  protected isLoading = signal(false);
  protected readonly crossIcon = cross;

  public constructor() {
    this.totalPage$ = this.catalogFacade.getPagesNumber();
    this.products$ = this.catalogFacade.getProductPage();
    this.products$
      .pipe(
        tap(() => this.isLoading.set(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
    this.getPage(0);
  }

  protected changetPage(next: number): void {
    this.getPage(next);
  }

  private getPage(page: number): void {
    this.isLoading.set(true);

    this.catalogFacade.loadProductPage(
      page * PAGE_SIZE,
      page * PAGE_SIZE + PAGE_SIZE
    );
  }
}
