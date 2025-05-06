import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-shell',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './shell.component.html',
})
export class ShellComponent {}
