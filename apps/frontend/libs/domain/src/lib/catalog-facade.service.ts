import { Injectable } from '@angular/core';
import { Product } from './types/interfaces';
import { FabricColor } from './types/filter-enums';

const PAGE_SIZE = 9;

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
