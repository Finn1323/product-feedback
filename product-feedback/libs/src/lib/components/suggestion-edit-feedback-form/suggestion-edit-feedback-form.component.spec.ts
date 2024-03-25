import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestionEditFeedbackFormComponent } from './suggestion-edit-feedback-form.component';

describe('SuggestionEditFeedbackFormComponent', () => {
  let component: SuggestionEditFeedbackFormComponent;
  let fixture: ComponentFixture<SuggestionEditFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionEditFeedbackFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestionEditFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
