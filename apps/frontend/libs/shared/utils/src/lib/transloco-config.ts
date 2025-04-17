import { isDevMode } from '@angular/core';
import { Langs } from './languages';
import { PartialTranslocoConfig } from '@jsverse/transloco/lib/transloco.config';

export const translocoCustomConfig: PartialTranslocoConfig = {
  availableLangs: [Langs.ENG, Langs.UKR],
  defaultLang: Langs.ENG,
  reRenderOnLangChange: true,
  prodMode: !isDevMode(),
};
