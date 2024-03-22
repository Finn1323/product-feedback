import { Component } from '@angular/core';
import { SuggestionCardComponent } from '@components/suggestion-card/suggestion-card.component';
import { NoSuggestionsComponent } from '@components/no-suggestions/no-suggestions.component';
import { HomePageComponent } from './pages/HomePage.component';
import { NewFeedbackFormComponent } from '@components/new-feedback-form/NewFeedbackForm.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    SuggestionCardComponent,
    NoSuggestionsComponent,
    NewFeedbackFormComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'product-feedback';
}
