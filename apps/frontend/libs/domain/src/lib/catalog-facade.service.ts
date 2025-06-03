import { inject, Injectable } from '@angular/core';
import { ProductApiService } from './product-api.service';
import { Product } from './types/interfaces';

const PAGE_SIZE = 9;

@Injectable({
  providedIn: 'root',
})
export class CatalogFacadeService {
  private readonly productApi = inject(ProductApiService);

  public async getProducts(from: number): Promise<Product[]> {
    return this.productApi.getProducts(from, PAGE_SIZE);
  }
}
