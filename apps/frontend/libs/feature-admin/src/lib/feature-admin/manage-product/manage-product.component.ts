import { Component } from '@angular/core';
import { ImageInputComponent } from './image-input/image-input';
import { ProductFormComponent } from './product-form/product-form.component';
import { ButtonComponent } from '@anx-store/shared/ui';

@Component({
  selector: 'lib-add-product',
  imports: [ImageInputComponent, ProductFormComponent, ButtonComponent],
  templateUrl: './manage-product.component.html',
})
export class ManageProductComponent {}
