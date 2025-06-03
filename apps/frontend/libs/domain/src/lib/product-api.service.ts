import { Injectable } from '@angular/core';
import { Product } from './types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  public getProducts(from: number, amount: number): Promise<Product[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.slice(from, amount));
      }, 1000);
    });
  }
}

export const products: Product[] = [
  {
    id: 1,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Vibrant plush urban lounge sofa',
    price: '1400',
  },
  {
    id: 2,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Vibrant plush Urban Lounge armchair',
    price: '860',
  },
  {
    id: 3,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Vibrant plush Urban Lounge chair',
    price: '430',
  },
  {
    id: 4,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Modern Chic Velvet Corner Couch',
    price: '1400',
  },
  {
    id: 5,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Cozy Chic Urban Lounge Sofa',
    price: '1700',
  },
  {
    id: 6,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Lush Plush Modern Living Sofa',
    price: '1160',
  },
  {
    id: 7,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Modern Chic Velvet Accent Chair',
    price: '500',
  },
  {
    id: 8,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Urban Retreat Plush Lounge Sofa',
    price: '1120',
  },
  {
    id: 9,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Sleek Chic Metro Lounge Sofa',
    price: '1340',
  },
  {
    id: 10,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Sleek Chic Metro Lounge Sofa',
    price: '1340',
  },
  {
    id: 11,
    imgUrl: 'https://i.imgur.com/3qFwJ2h.png',
    title: 'Sleek Chic Metro Lounge Sofa',
    price: '1340',
  },
];
