import { Injectable } from '@angular/core';
import { FabricColor } from './filter-enums';
// import { FabricColor } from './filter-enums';

interface CategoryFilter {
  name: string;
  amount: number;
}
interface MaterialsFilter {
  name: string;
  amount: number;
}
interface ColorsFilter {
  name: string;
  hexCode: FabricColor;
}

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly filterCategoryOptions: CategoryFilter[] = [
    { name: 'all', amount: 445 },
    { name: 'armchairs_and_sofas', amount: 120 },
    { name: 'beds_futons', amount: 95 },
    { name: 'chairs_semi-chairs', amount: 150 },
    { name: 'kinds_furniture', amount: 80 },
  ];

  private readonly filterMaterialOptions: MaterialsFilter[] = [
    { name: 'cotton', amount: 0 },
    { name: 'linen', amount: 0 },
    { name: 'polyester', amount: 0 },
    { name: 'velvet', amount: 0 },
    { name: 'leather', amount: 0 },
    { name: 'microfiber', amount: 0 },
    { name: 'chenille', amount: 0 },
    { name: 'vinyl', amount: 0 },
  ];

  private readonly filterColorsOptions: ColorsFilter[] = Object.entries(
    FabricColor
  ).map(([k, v]) => ({ name: k, hexCode: v }));

  public getFilterCategoryOptions(): CategoryFilter[] {
    return this.filterCategoryOptions;
  }
  public getFilterMaterialOptions(): MaterialsFilter[] {
    return this.filterMaterialOptions;
  }
  public getFilterColorsOptions(): ColorsFilter[] {
    return this.filterColorsOptions;
  }
}
