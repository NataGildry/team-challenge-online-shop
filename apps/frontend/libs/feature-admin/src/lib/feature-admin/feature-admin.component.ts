import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@anx-store/shared/ui';

@Component({
  selector: 'lib-feature-admin',
  imports: [RouterOutlet, RouterLink, ButtonComponent],
  templateUrl: './feature-admin.component.html',
})
export class FeatureAdminComponent {}
