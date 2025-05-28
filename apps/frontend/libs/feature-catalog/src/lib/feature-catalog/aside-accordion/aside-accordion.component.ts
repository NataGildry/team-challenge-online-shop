import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { plus, minus, IconComponent } from '@anx-store/shared/ui';
import { AccordionOptions } from '@anx-store/domain';

@Component({
  selector: 'lib-aside-accordion',
  imports: [CommonModule, IconComponent],
  templateUrl: './aside-accordion.component.html',
})
export class AsideAccordionComponent {
  protected readonly plus = plus;
  protected readonly minus = minus;
  protected openIndex = signal(-1);

  protected readonly options: AccordionOptions[] = [
    { option: 'categories', data: 'data' },
    { option: 'color', data: 'data' },
    { option: 'Upholstery material', data: 'data' },
    { option: 'price', data: 'data' },
  ];

  protected readonly categoriesList: { name: string; amount: number }[] = [
    { name: 'All', amount: 445 },
    { name: 'Armchairs and Sofas', amount: 120 },
    { name: 'Beds and Futons', amount: 95 },
    { name: 'Chairs and Semi-chairs', amount: 150 },
    { name: 'Kids Furniture', amount: 80 },
  ];

  protected toggleAccordion(index: number): void {
    if (this.openIndex() === index) {
      this.openIndex.set(-1);
      return;
    }
    this.openIndex.set(index);
  }
}
