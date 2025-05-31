import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsideAccordionComponent } from './aside-accordion/aside-accordion.component';
import { SmallCardComponent } from '@anx-store/shared/ui';
import { CatalogPaginationComponent } from './catalog-pagination/catalog-pagination.component';
import { RouterOutlet } from '@angular/router';
import { CatalogFacadeService, Product } from '@anx-store/domain';
import { SortSelectComponent } from './sort-select/sort-select.component';

@Component({
  selector: 'lib-feature-catalog',
  imports: [
    CommonModule,
    AsideAccordionComponent,
    SmallCardComponent,
    CatalogPaginationComponent,
    RouterOutlet,
    SortSelectComponent,
  ],
  templateUrl: './feature-catalog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatalogComponent {
  private readonly catalogFacade = inject(CatalogFacadeService);

  protected products: Product[] = this.catalogFacade.getSmallCards(0);
  protected totalPage: number = this.catalogFacade.getSmallCardsSize();

  protected navigateNextPage(next: number): void {
    this.products = this.catalogFacade.getSmallCards(next);
  }
}
