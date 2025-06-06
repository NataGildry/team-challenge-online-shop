import { inject, Injectable } from '@angular/core';
import { ProductApiService } from './product-api.service';
import { Product } from './types/interfaces';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogFacadeService {
  private readonly productApi = inject(ProductApiService);

  private productsPage$ = new BehaviorSubject<Product[]>([]);
  private pagesNumber$ = new BehaviorSubject<number>(2);

  public loadProductPage(from: number, amount: number): void {
    this.productApi
      .getProducts(from, amount)
      .pipe(
        tap((products: Product[]) => {
          this.productsPage$.next(products);
        })
      )
      .subscribe();
  }

  public getProductPage(): Observable<Product[]> {
    return this.productsPage$;
  }
  public getPagesNumber(): Observable<number> {
    return this.pagesNumber$;
  }
}
