import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoSuggestionsComponent } from './no-suggestions.component';

describe('NoSuggestionsComponent', () => {
  let component: NoSuggestionsComponent;
  let fixture: ComponentFixture<NoSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoSuggestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
