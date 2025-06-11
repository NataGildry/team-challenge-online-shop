import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Langs } from '../transloco';

const CURRENT_LANGUAGE_KEY = 'currentLanguageAnxStore';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly platformId = inject(PLATFORM_ID);

  public getCurrentLang(): string {
    if (!isPlatformBrowser(this.platformId)) return '';
    return localStorage.getItem(CURRENT_LANGUAGE_KEY) ?? Langs.ENG;
  }

  public setCurrentLang(value: string): void {
    localStorage.setItem(CURRENT_LANGUAGE_KEY, value);
  }
}
