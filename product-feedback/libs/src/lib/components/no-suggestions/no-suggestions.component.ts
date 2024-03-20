import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-no-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './no-suggestions.component.html',
  styleUrl: './no-suggestions.component.css',
})
export class NoSuggestionsComponent {}
