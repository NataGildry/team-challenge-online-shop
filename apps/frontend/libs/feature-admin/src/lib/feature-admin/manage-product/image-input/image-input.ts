import { Component, signal } from '@angular/core';
import {
  cross,
  IconButtonComponent,
  image,
  plus,
  IconComponent,
} from '@anx-store/shared/ui';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'lib-image-input',
  templateUrl: './image-input.html',
  imports: [IconButtonComponent, IconComponent, TranslocoDirective],
})
export class ImageInputComponent {
  protected readonly plusIcon = plus;
  protected readonly imgIcon = image;
  protected readonly crossIcon = cross;

  protected images = signal<string[]>(['']);

  protected addImageInput(): void {
    this.images.set([...this.images(), '']);
  }

  protected removeImage(index: number): void {
    if (this.images().length === 1) return;
    this.images.set([...this.images().filter((_, i) => i !== index)]);
  }
}
