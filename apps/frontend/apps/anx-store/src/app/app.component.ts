import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule, AppHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'anx-store';
}
