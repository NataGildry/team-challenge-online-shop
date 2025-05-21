import { Route } from '@angular/router';
import { FeatureCatalogComponent } from './feature-catalog/feature-catalog.component';
import { ProductDetailComponent } from './feature-catalog/product-detail/product-detail.component';

export const featureCatalogRoutes: Route[] = [
  {
    path: 'catalog',
    children: [
      { path: '', component: FeatureCatalogComponent },
      { path: 'product', component: ProductDetailComponent },
    ],
  },
];
