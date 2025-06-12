import { Component } from '@angular/core';
import { ImageInputComponent } from '../image-input/image-input';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'lib-add-product',
  imports: [ImageInputComponent, ProductFormComponent],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {}
