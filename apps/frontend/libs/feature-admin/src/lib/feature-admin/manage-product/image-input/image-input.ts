import { Component } from '@angular/core';
import {
  cross,
  IconButtonComponent,
  image,
  plus,
  IconComponent,
} from '@anx-store/shared/ui';

@Component({
  selector: 'lib-image-input',
  templateUrl: './image-input.html',
  imports: [IconButtonComponent, IconComponent],
})
export class ImageInputComponent {
  protected plusIcon = plus;
  protected imgIcon = image;
  protected crossIcon = cross;
}
