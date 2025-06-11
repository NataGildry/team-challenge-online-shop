import { Component, inject, input, output } from '@angular/core';
import { chevron, IconComponent } from '@anx-store/shared/ui';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-catalog-pagination',
  imports: [IconComponent, TranslocoDirective],
  templateUrl: './catalog-pagination.component.html',
})
export class CatalogPaginationComponent {
  private readonly translocoService = inject(TranslocoService);
  protected readonly chevronIcon = chevron;

  protected currentPageIndex = 0;

  public readonly totalPages = input.required<number>();

  public readonly pageChanged = output<number>();

  protected moveForward(): void {
    if (this.currentPageIndex + 1 === this.totalPages()) return;
    this.currentPageIndex++;
    this.pageChanged.emit(this.currentPageIndex);
  }

  protected moveBackward(): void {
    if (this.currentPageIndex === 0) return;
    this.currentPageIndex--;
    this.pageChanged.emit(this.currentPageIndex);
  }
}
