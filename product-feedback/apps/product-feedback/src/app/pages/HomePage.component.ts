import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '@components/category/Category.component';
import { RoadmapComponent } from '@components/roadmap/Roadmap.component';
import { SuggestionsHeaderComponent } from '@components/suggestion-header/suggestions-header.component';
import { SuggestionEditFeedbackFormComponent } from '@components/suggestion-edit-feedback-form/suggestion-edit-feedback-form.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CategoryComponent,
    RoadmapComponent,
    SuggestionsHeaderComponent,
    SuggestionEditFeedbackFormComponent,
  ],
  templateUrl: './HomePage.component.html',
  styleUrl: './HomePage.component.css',
})
export class HomePageComponent {}
