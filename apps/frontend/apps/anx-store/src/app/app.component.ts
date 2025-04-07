import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ShellComponent } from 'libs/shell/src/lib/shell/shell.component';

@Component({
  imports: [
    NxWelcomeComponent,
    RouterModule,
    AppHeaderComponent,
    ShellComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = 'anx-store';
}
