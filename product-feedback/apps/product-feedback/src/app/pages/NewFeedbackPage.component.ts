import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFeedbackFormComponent } from '@components/new-feedback-form/NewFeedbackForm.component';
@Component({
  selector: 'app-new-feedback-page',
  standalone: true,
  imports: [CommonModule, NewFeedbackFormComponent],
  templateUrl: './NewFeedbackPage.component.html',
  styleUrl: './NewFeedbackPage.component.css',
})
export class NewFeedbackPageComponent {}
