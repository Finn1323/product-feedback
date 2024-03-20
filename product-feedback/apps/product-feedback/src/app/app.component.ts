import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { TestComponent } from '../../../../libs/src/lib/components/test/test.component';
import { TestComponent } from '@components/test/test.component';
import { HomePageComponent } from '@components/HomePage/HomePage.component';
@Component({
  standalone: true,
  imports: [RouterModule, TestComponent, HomePageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-feedback';
}
