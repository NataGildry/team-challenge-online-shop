import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-footer-link',
  imports: [RouterLink],
  templateUrl: './footer-link.component.html',
  styleUrl: './footer-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLinkComponent {
  public readonly name = input<string>('/');
  public readonly link = input<string>('#');
}
