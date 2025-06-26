import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import {
  IconComponent,
  dashboard,
  questionMark,
  exit,
  iconBasket,
} from '@anx-store/shared/ui';
import { TranslocoDirective } from '@jsverse/transloco';
import { filter, tap } from 'rxjs';

export type layoutKeys = 'dashboard' | 'products' | 'add_item';

@Component({
  selector: 'lib-feature-admin',
  imports: [RouterOutlet, IconComponent, RouterLink, TranslocoDirective],
  templateUrl: './feature-admin.component.html',
})
export class FeatureAdminComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly exitIcon = exit;

  protected currentLayout: layoutKeys = 'dashboard';

  protected readonly layouts = [
    { name: 'dashboard', icon: dashboard, linkTo: 'dashboard' },
    { name: 'products', icon: iconBasket, linkTo: 'products' },
    { name: 'help', icon: questionMark, linkTo: '/' },
  ];

  public constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap((ev: NavigationEnd) => {
          const url = ev.urlAfterRedirects.split('/');
          if (url.length) {
            const layout = url[url.length - 1];
            if (layout === 'dashboard') {
              this.currentLayout = layout;
            } else if (layout === 'products') {
              this.currentLayout = layout;
            } else if (layout === 'add-product') {
              this.currentLayout = 'add_item';
            } else {
              this.currentLayout = 'dashboard';
            }
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
