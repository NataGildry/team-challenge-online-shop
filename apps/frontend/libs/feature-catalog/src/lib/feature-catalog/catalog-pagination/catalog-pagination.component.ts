import { Component, input, output } from '@angular/core';
import { chevron, IconComponent } from '@anx-store/shared/ui';

@Component({
  selector: 'lib-catalog-pagination',
  imports: [IconComponent],
  templateUrl: './catalog-pagination.component.html',
})
export class CatalogPaginationComponent {
  protected readonly chevronIcon = chevron;

  protected currentPage = 0;

  public readonly totalPage = input.required<number>();

  public readonly navigateNextPage = output<number>();

  protected moveToNext(page: number): void {
    if (
      (this.currentPage + 1 === this.totalPage() && page > 0) ||
      (this.currentPage === 0 && page < 0)
    )
      return;
    this.currentPage = this.currentPage + page;
    this.navigateNextPage.emit(this.currentPage);
  }
}
