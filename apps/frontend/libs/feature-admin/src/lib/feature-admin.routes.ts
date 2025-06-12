import { Route } from '@angular/router';
import { FeatureAdminComponent } from './feature-admin/feature-admin.component';
import { ManageProductComponent } from './feature-admin/manage-product/manage-product.component';

export const featureAdminRoutes: Route[] = [
  {
    path: 'admin',
    children: [
      { path: '', component: FeatureAdminComponent },
      { path: 'add-product', component: ManageProductComponent },
      { path: 'edit-product/:id', component: ManageProductComponent },
    ],
  },
];
