import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { plus, minus, IconComponent } from '@anx-store/shared/ui';
import { PriceRangeComponent } from './price-range/price-range.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { CatalogService } from '../../catalog.service';

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
    ReactiveFormsModule,
    TranslocoDirective,
  ],
  templateUrl: './aside-accordion.component.html',
})
export class AsideAccordionComponent {
  private readonly catalogService = inject(CatalogService);
  private readonly translocoService = inject(TranslocoService);

  protected readonly plus = plus;
  protected readonly minus = minus;
  protected opened = signal<boolean[]>([false, false, false, false]);

  protected readonly colorsControl = new FormControl();

  protected readonly options: FilterGroups[] = [
    FilterGroups.Categories,
    FilterGroups.Color,
    FilterGroups.UpholsteryMaterial,
    FilterGroups.Price,
  ];

  protected readonly categoriesList: { name: string; amount: number }[] =
    this.catalogService.getFilterCategoryOptions();

  protected readonly materialList: { name: string; amount: number }[] =
    this.catalogService.getFilterMaterialOptions();

  protected readonly colorList: { name: string; hexCode: string }[] =
    this.catalogService.getFilterColorsOptions();

  protected toggleAccordion(index: number): void {
    const newState = [...this.opened()];
    newState[index] = !newState[index];
    this.opened.set(newState);
  }
}
