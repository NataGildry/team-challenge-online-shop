import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { plus, minus, IconComponent } from '@anx-store/shared/ui';
import { CatalogFacadeService } from '@anx-store/domain';
import { PriceRangeComponent } from './price-range/price-range.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

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
    PriceRangeComponent,
    ColorPickerComponent,
  ],
  templateUrl: './aside-accordion.component.html',
})
export class AsideAccordionComponent {
  private readonly catalogFacadeService = inject(CatalogFacadeService);
  protected readonly plus = plus;
  protected readonly minus = minus;
  protected opened = signal<boolean[]>([false, false, false, false]);

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
    const newState = [...this.opened()];
    newState[index] = !newState[index];
    this.opened.set(newState);
  }
}
