import { Route } from '@angular/router';
import { ManageProductComponent } from './feature-admin/manage-product/manage-product.component';
import { ProductLayoutComponent } from './feature-admin/products-layout/products-layout.component';

export const adminFeatureRoutes: Route[] = [
  {
    path: 'admin',
    loadComponent: () =>
      import('./feature-admin/feature-admin.component').then(
        (m) => m.FeatureAdminComponent
      ),

    children: [
      {
        path: 'products',
        component: ProductLayoutComponent,
      },
      { path: 'products/add-product', component: ManageProductComponent },
      { path: 'products/edit-product/:id', component: ManageProductComponent },
    ],
  },
];
