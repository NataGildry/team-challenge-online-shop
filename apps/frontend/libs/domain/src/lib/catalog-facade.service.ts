import { Injectable } from '@angular/core';
import { Product } from './types/interfaces';
import {
  FurnitureCategory,
  UpholsteryMaterial,
  FabricColor,
} from './types/filter-enums';

const PAGE_SIZE = 9;

interface CategoryFilter {
  name: FurnitureCategory;
  amount: number;
}
interface MaterialsFilter {
  name: UpholsteryMaterial;
  amount: number;
}
interface ColorsFilter {
  name: string;
  hexCode: FabricColor;
}

@Injectable({
  providedIn: 'root',
})
export class CatalogFacadeService {
  private smallCards: Product[] = [
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Vibrant plush urban lounge sofa',
      price: '1400',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Vibrant plush Urban Lounge armchair',
      price: '860',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Vibrant plush Urban Lounge chair',
      price: '430',
    },

    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Modern Chic Velvet Corner Couch',
      price: '1400',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Cozy Chic Urban Lounge Sofa',
      price: '1700',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Lush Plush Modern Living Sofa',
      price: '1160',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Modern Chic Velvet Accent Chair',
      price: '500',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Urban Retreat Plush Lounge Sofa',
      price: '1120',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Sleek Chic Metro Lounge Sofa',
      price: '1340',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Sleek Chic Metro Lounge Sofa',
      price: '1340',
    },
    {
      imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
      title: 'Sleek Chic Metro Lounge Sofa',
      price: '1340',
    },
  ];

  private readonly filterCategoryOptions: CategoryFilter[] = [
    { name: FurnitureCategory.All, amount: 445 },
    { name: FurnitureCategory.ArmchairsAndSofas, amount: 120 },
    { name: FurnitureCategory.BedsAndFutons, amount: 95 },
    { name: FurnitureCategory.ChairsAndSemiChairs, amount: 150 },
    { name: FurnitureCategory.KidsFurniture, amount: 80 },
  ];

  private readonly filterMaterialOptions: MaterialsFilter[] = [
    { name: UpholsteryMaterial.Cotton, amount: 0 },
    { name: UpholsteryMaterial.Linen, amount: 0 },
    { name: UpholsteryMaterial.Polyester, amount: 0 },
    { name: UpholsteryMaterial.Velvet, amount: 0 },
    { name: UpholsteryMaterial.Leather, amount: 0 },
    { name: UpholsteryMaterial.Microfiber, amount: 0 },
    { name: UpholsteryMaterial.Chenille, amount: 0 },
    { name: UpholsteryMaterial.Vinyl, amount: 0 },
  ];

  private readonly filterColorsOptions: ColorsFilter[] = Object.entries(
    FabricColor
  ).map(([k, v]) => ({ name: k, hexCode: v }));

  public getSmallCards(page: number): Product[] {
    return this.smallCards.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  }

  public getSmallCardsSize(): number {
    return Math.ceil(this.smallCards.length / PAGE_SIZE);
  }

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
