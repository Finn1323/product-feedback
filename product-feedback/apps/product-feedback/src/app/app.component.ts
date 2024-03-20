import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SuggestionCardComponent } from '@components/suggestion-card/suggestion-card.component';
import { NoSuggestionsComponent } from '@components/no-suggestions/no-suggestions.component';
@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
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
