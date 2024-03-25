import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '@components/category/Category.component';
import { RoadmapComponent } from '@components/roadmap/Roadmap.component';
import { SuggestionCardComponent } from '@components/suggestion-card/suggestion-card.component';
import { SuggestionsHeaderComponent } from '@components/suggestion-header/suggestions-header.component';
import { NoSuggestionsComponent } from '@components/no-suggestions/no-suggestions.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CategoryComponent,
    RoadmapComponent,
    SuggestionCardComponent,
    SuggestionsHeaderComponent,
    NoSuggestionsComponent,
  ],
  templateUrl: './HomePage.component.html',
})
export class HomePageComponent {}
