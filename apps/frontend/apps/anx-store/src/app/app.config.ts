import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideTransloco } from '@jsverse/transloco';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  translocoBaseConfig,
  TranslocoHttpLoader,
} from '@anx-store/shared/utils';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    provideTransloco({
      config: {
        ...translocoBaseConfig,
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
