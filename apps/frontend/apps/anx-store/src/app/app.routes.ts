import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () =>
      import('@anx-store/feature-admin').then((m) => m.adminRoutes),
  },
  {
    path: '',
    loadChildren: () => import('@anx-store/shell').then((m) => m.shellRoutes),
  },
];
