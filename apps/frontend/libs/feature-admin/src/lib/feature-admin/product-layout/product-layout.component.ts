import { Component } from '@angular/core';
import { ButtonComponent } from '@anx-store/shared/ui';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'lib-product-layout',
  imports: [ButtonComponent, RouterLink, TranslocoDirective],
  templateUrl: './product-layout.component.html',
})
export class ProductLayoutComponent {}
