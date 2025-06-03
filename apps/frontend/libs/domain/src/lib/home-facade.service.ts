import { inject, Injectable } from '@angular/core';
import { ProductApiService } from './product-api.service';
import { Product } from './types/interfaces';

export const PAGE_SIZE = 9;
@Injectable({
  providedIn: 'root',
})
export class HomeFacadeService {
  private readonly productApi = inject(ProductApiService);

  private midCards: { title: string; imgLink: string }[] = [
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

  public async getProducts(amount: number): Promise<Product[]> {
    return this.productApi.getProducts(0, amount);
  }

  public getMidCards(): { title: string; imgLink: string }[] {
    return this.midCards;
  }
}
