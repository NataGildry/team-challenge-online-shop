import { Component } from '@angular/core';
import { IconButtonComponent , plus } from '@anx-store/shared/ui';

@Component({
  selector: 'lib-image-input',
  templateUrl: './image-input.html',
  imports: [IconButtonComponent],
})
export class ImageInputComponent {
  protected plusIcon = plus;
}
