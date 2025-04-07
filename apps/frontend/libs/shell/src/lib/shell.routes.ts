import { Routes } from '@angular/router';
import { featureHomeRoutes } from '@anx-store/feature-home';
import { featureCatalogRoutes } from '@anx-store/feature-catalog';
import { featureAboutRoutes } from '@anx-store/feature-about';

export const shellRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./header/header.component').then((m) => m.HeaderComponent),
    children: [
      ...featureHomeRoutes,
      ...featureCatalogRoutes,
      ...featureAboutRoutes,
    ],
  },
];
