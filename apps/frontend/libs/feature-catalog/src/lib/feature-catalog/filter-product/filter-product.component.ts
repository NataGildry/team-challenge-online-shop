import { Component, inject, signal } from '@angular/core';
import {
  plus,
  minus,
  IconComponent,
  PriceRangeComponent,
} from '@anx-store/shared/ui';
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
interface FilterSection {
  key: FilterGroups;
  label: FilterGroups;
  opened: boolean;
}

interface FilterSections {
  Categories: FilterSection;
  Color: FilterSection;
  UpholsteryMaterial: FilterSection;
  Price: FilterSection;
}
type FilterSectionKey = 'Categories' | 'Color' | 'UpholsteryMaterial' | 'Price';

@Component({
  selector: 'lib-filter-product',
  imports: [
    IconComponent,
    PriceRangeComponent,
    ColorPickerComponent,
    ReactiveFormsModule,
    TranslocoDirective,
  ],
  templateUrl: './filter-product.component.html',
})
export class FilterProductComponent {
  private readonly catalogService = inject(CatalogService);
  private readonly translocoService = inject(TranslocoService);

  protected readonly plus = plus;
  protected readonly minus = minus;
  protected filterSections = signal<FilterSections>({
    Categories: {
      key: FilterGroups.Categories,
      label: FilterGroups.Categories,
      opened: false,
    },
    Color: {
      key: FilterGroups.Color,
      label: FilterGroups.Color,
      opened: false,
    },
    UpholsteryMaterial: {
      key: FilterGroups.UpholsteryMaterial,
      label: FilterGroups.UpholsteryMaterial,
      opened: false,
    },
    Price: {
      key: FilterGroups.Price,
      label: FilterGroups.Price,
      opened: false,
    },
  });

  protected readonly colorsControl = new FormControl();

  protected readonly categoriesList: { name: string; amount: number }[] =
    this.catalogService.getFilterCategoryOptions();

  protected readonly materialList: { name: string; amount: number }[] =
    this.catalogService.getFilterMaterialOptions();

  protected readonly colorList: { name: string; hexCode: string }[] =
    this.catalogService.getFilterColorsOptions();

  protected toggleAccordion(index: FilterSectionKey): void {
    const newState = { ...this.filterSections() };
    newState[index].opened = !newState[index].opened;
    this.filterSections.set(newState);
  }
}
