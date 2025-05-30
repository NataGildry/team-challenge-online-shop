import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@anx-store/shell').then((m) => m.shellRoutes),
  },
];
