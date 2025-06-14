import {
  Component,
  OnChanges,
  SimpleChanges,
  inject,
  input,
} from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-locale-manager',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class LocaleManagerComponent implements OnChanges {
  public locale = input('en');
  private translationService = inject(TranslocoService);

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['locale']) {
      const changedProp = changes['locale'];
      this.translationService.setActiveLang(changedProp.currentValue);
    }
  }
}
