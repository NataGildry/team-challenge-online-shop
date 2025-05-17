import { Injectable } from '@angular/core';
import { SmallCard, MidCard } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private smallCards: SmallCard[] = [
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
  ];
  private midCards: MidCard[] = [
    {
      title: 'Armchairs and sofas',
      imgLink: 'https://i.imgur.com/9xo3v7p.jpeg',
    },
    { title: 'Beds and futons', imgLink: 'https://i.imgur.com/9xo3v7p.jpeg' },
    {
      title: 'Chairs and semi-chairs',
      imgLink: 'https://i.imgur.com/9xo3v7p.jpeg',
    },
    { title: 'Kids furniture', imgLink: 'https://i.imgur.com/9xo3v7p.jpeg' },
  ];

  public getSmallCards(): SmallCard[] {
    return this.smallCards;
  }
  public getMidCards(): MidCard[] {
    return this.midCards;
  }
}
