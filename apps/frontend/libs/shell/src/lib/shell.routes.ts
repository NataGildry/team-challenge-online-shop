import { Routes } from '@angular/router';
import { featureHomeRoutes } from '@anx-store/feature-home';
import { featureCatalogRoutes } from '@anx-store/feature-catalog';
import { featureAboutRoutes } from '@anx-store/feature-about';
import { adminRoutes } from '@anx-store/feature-admin';

export const shellRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shell/shell.component').then((m) => m.ShellComponent),
    children: [
      ...featureHomeRoutes,
      ...featureCatalogRoutes,
      ...featureAboutRoutes,
      ...adminRoutes,
    ],
  },
];
