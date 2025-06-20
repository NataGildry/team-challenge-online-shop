import { Route } from '@angular/router';
import { ManageProductComponent } from './feature-admin/manage-product/manage-product.component';
import { ProductLayoutComponent } from './feature-admin/product-layout/product-layout.component';

export const adminRoutes: Route[] = [
  {
    path: 'admin',
    loadComponent: () =>
      import('./feature-admin/feature-admin.component').then(
        (m) => m.FeatureAdminComponent
      ),
    children: [
      { path: 'product', component: ProductLayoutComponent },
      { path: 'product/add-product', component: ManageProductComponent },
      { path: 'product/edit-product/:id', component: ManageProductComponent },
    ],
  },
];
