import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MatButtonModule],
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    <h1 class="bg-blue-500">Hello world</h1>
    <div class="flex items-center"><button mat-flat-button>Basic</button></div>
  `,
  styles: ['h1, div, button {border: 1px solid red;}'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
