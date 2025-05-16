import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsideAccordionComponent } from './aside-accordion/aside-accordion.component';

@Component({
  selector: 'lib-feature-catalog',
  imports: [CommonModule, AsideAccordionComponent],
  templateUrl: './feature-catalog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatalogComponent {}
