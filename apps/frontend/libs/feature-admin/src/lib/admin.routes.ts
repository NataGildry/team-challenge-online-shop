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
    data: { title: 'dashboard' },
    children: [
      {
        path: 'products',
        component: ProductLayoutComponent,
        data: { title: 'products' },
      },
      { path: 'products/add-product', component: ManageProductComponent },
      { path: 'products/edit-product/:id', component: ManageProductComponent },
    ],
  },
];
