import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@anx-store/shared/ui';
import { RouterLink } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'lib-product-layout',
  imports: [ButtonComponent, RouterLink, TranslocoDirective],
  templateUrl: './product-layout.component.html',
})
export class ProductLayoutComponent {
  private readonly transloco = inject(TranslocoService);
}
