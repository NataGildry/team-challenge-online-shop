import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideTransloco } from '@jsverse/transloco';
import { provideHttpClient } from '@angular/common/http';
import { translocoCustomConfig , TranslocoHttpLoader } from '@anx-store/utils';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideTransloco({
      config: translocoCustomConfig,
      loader: TranslocoHttpLoader,
    }),
  ],
};
