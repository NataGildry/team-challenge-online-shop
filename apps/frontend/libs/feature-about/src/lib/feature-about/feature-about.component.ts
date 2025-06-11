import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-feature-about',
  imports: [],
  templateUrl: './feature-about.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAboutComponent {}
