export * from './lib/shell/shell.component';
export * from './lib/header/header.component';
// export * from './lib/shellRoutes';
import { Route, Routes } from '@angular/router';

export const shellRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./lib/header/header.component').then((m) => m.HeaderComponent), // or header component
    //children: [...homeRoutes, ...catalogRoutes, ...cartRoutes],
  },
];
