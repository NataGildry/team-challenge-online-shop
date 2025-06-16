import { Component } from '@angular/core';
import { ButtonComponent } from '@anx-store/shared/ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-product-layout',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './product-layout.component.html',
})
export class ProductLayoutComponent {}
