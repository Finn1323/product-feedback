import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-suggestion-edit-feedback-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestion-edit-feedback-form.component.html',
  styleUrl: './suggestion-edit-feedback-form.component.css',
})
export class SuggestionEditFeedbackFormComponent {
  optionItems1 = ['Feature', 'UI', 'Enhancement', 'Bug'];
  optionItems2 = ['Suggestion', 'Planned', 'In Progess', 'Live'];
}
