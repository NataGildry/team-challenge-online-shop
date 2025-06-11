import { isDevMode } from '@angular/core';
import { Langs } from './available-languages.enum';
import { PartialTranslocoConfig } from '@jsverse/transloco/lib/transloco.config';

export const translocoBaseConfig: PartialTranslocoConfig = {
  availableLangs: [Langs.ENG, Langs.UKR],
  defaultLang: Langs.ENG,
  reRenderOnLangChange: true,
  prodMode: !isDevMode(),
};
