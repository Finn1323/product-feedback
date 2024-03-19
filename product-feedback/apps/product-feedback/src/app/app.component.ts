import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TestComponent } from '../../../../libs/src/lib/components/test/test.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TestComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-feedback';
}
