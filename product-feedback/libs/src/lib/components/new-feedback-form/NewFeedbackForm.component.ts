import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'lib-new-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './NewFeedbackForm.component.html',
  styleUrl: './NewFeedbackForm.component.css',
})
export class NewFeedbackFormComponent {
  constructor(private builder: FormBuilder) {}

  newFeedbackForm = this.builder.group({
    title: this.builder.control('', Validators.required),
    category: this.builder.control('', Validators.required),
    detail: this.builder.control('', Validators.required),
  });

  addFeedback() {
    if (this.newFeedbackForm.valid) {
      console.log(this.newFeedbackForm.value);
    }
  }
}
