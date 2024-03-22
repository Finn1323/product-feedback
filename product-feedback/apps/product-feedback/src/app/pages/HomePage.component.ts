import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '@components/category/Category.component';
import { RoadmapComponent } from '@components/roadmap/Roadmap.component';
import { SuggestionCardComponent } from '@components/suggestion-card/suggestion-card.component';
import { SuggestionsHeaderComponent } from '@components/suggestion-header/suggestions-header.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CategoryComponent,
    RoadmapComponent,
    SuggestionCardComponent,
    SuggestionsHeaderComponent,
  ],
  templateUrl: './HomePage.component.html',
})
export class HomePageComponent {}
