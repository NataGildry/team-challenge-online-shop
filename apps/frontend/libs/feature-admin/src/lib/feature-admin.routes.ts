import { Route } from '@angular/router';
import { FeatureAdminComponent } from './feature-admin/feature-admin.component';
import { AddProductComponent } from './feature-admin/add-product/add-product.component';

export const featureAdminRoutes: Route[] = [
  {
    path: 'admin',
    children: [
      { path: '', component: FeatureAdminComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'edit-product/:id', component: AddProductComponent },
    ],
  },
];
