import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuggestionCardComponent } from '@components/suggestion-card/suggestion-card.component';
import { NoSuggestionsComponent } from '@components/no-suggestions/no-suggestions.component';
import { HomePageComponent } from '@components/HomePage/HomePage.component';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    TestComponent,
    HomePageComponent,
    SuggestionCardComponent,
    NoSuggestionsComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-feedback';
}
