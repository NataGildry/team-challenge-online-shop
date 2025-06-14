import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslocoModule, provideTransloco } from '@jsverse/transloco';

import { TranslocoHttpLoader } from './transloco-loader';
import { translocoBaseConfig } from './transloco-config';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideHttpClient(withFetch()),
    provideTransloco({
      config: translocoBaseConfig,
      loader: TranslocoHttpLoader,
    }),
  ],
})
export class TranslocoRootModule {}
