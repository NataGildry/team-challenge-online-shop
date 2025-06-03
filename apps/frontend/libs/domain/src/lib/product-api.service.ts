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
