import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewFeedbackFormComponent } from './NewFeedbackForm.component';

describe('NewFeedbackFormComponent', () => {
  let component: NewFeedbackFormComponent;
  let fixture: ComponentFixture<NewFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFeedbackFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
