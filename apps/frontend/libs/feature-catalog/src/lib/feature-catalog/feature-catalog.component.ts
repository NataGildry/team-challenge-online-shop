import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsideAccordionComponent } from './aside-accordion/aside-accordion.component';
import { CatalogService, SmallCard } from '@anx-store/shared/utils';
import { SmallCardComponent } from '@anx-store/shared/ui';

@Component({
  selector: 'lib-feature-catalog',
  imports: [CommonModule, AsideAccordionComponent, SmallCardComponent],
  templateUrl: './feature-catalog.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCatalogComponent {
  private readonly catalogService = inject(CatalogService);

  protected smallCards: SmallCard[] = this.catalogService.getSmallCards();
}
