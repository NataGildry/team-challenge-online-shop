import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  plus,
  minus,
  IconComponent,
  ClickOutsideDirective,
} from '@anx-store/shared/ui';
import { CatalogFacadeService } from '@anx-store/domain';
import { PriceRangeComponent } from './price-range/price-range.component';

enum FilterGroups {
  Categories = 'categories',
  Color = 'color',
  UpholsteryMaterial = 'Upholstery material',
  Price = 'price',
}

@Component({
  selector: 'lib-aside-accordion',
  imports: [
    CommonModule,
    IconComponent,
    ClickOutsideDirective,
    PriceRangeComponent,
  ],
  templateUrl: './aside-accordion.component.html',
})
export class AsideAccordionComponent {
  private readonly catalogFacadeService = inject(CatalogFacadeService);
  protected readonly plus = plus;
  protected readonly minus = minus;
  protected openIndex = signal(-1);
  protected selectedColor = '';

  protected readonly options: FilterGroups[] = [
    FilterGroups.Categories,
    FilterGroups.Color,
    FilterGroups.UpholsteryMaterial,
    FilterGroups.Price,
  ];

  protected readonly categoriesList: { name: string; amount: number }[] =
    this.catalogFacadeService.getFilterCategoryOptions();

  protected readonly materialList: { name: string; amount: number }[] =
    this.catalogFacadeService.getFilterMaterialOptions();

  protected readonly colorList: { name: string; value: string }[] =
    this.catalogFacadeService.getFilterColorsOptions();

  protected toggleAccordion(index: number): void {
    if (this.openIndex() === index) {
      this.openIndex.set(-1);
      return;
    }
    this.openIndex.set(index);
  }

  protected selectColor(value: string): void {
    if (this.selectedColor === value) {
      this.selectedColor = '';
      return;
    }
    this.selectedColor = value;
  }
  protected clickOutsideColor(item: { name: string; value: string }): void {
    if (this.selectedColor === item.value) {
      this.selectedColor = '';
    }
  }
}
