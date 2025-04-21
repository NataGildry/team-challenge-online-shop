import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly CURRENT_LANGUAGE_KEY = 'currentLangugeAnxSotre';

  private localStorage = inject(PLATFORM_ID);
  // public constructor() {

  // }

  public getCurrentLang(): string {
    return localStorage.getItem(this.CURRENT_LANGUAGE_KEY) ?? '';
  }

  public setCurrentLang(value: string): void {
    localStorage.setItem(this.CURRENT_LANGUAGE_KEY, value);
  }
}
