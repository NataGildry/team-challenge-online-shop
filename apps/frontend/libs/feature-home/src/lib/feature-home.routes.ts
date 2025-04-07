import { Route } from '@angular/router';
import { FeatureHomeComponent } from './feature-home/feature-home.component';

export const featureHomeRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FeatureHomeComponent },
];
