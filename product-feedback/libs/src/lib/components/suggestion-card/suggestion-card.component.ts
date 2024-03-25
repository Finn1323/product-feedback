import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ProductFeedback } from '../../store/product-feedback.interface';
import { addProductFeedback } from '../../store/product-feedback.actions';
import { NgIf, NgFor } from '@angular/common';
import { getProductFeedback } from '../../store/product-feedback.selector';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-suggestion-card',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './suggestion-card.component.html',
  styleUrl: './suggestion-card.component.css',
})
export class SuggestionCardComponent implements OnInit {
  @Input() productFeedback: ProductFeedback = {
    id: 0,
    title: '',
    category: '',
    upvotes: 0,
    status: '',
    description: '',
    comments: [],
  };
  private destroyRef = inject(DestroyRef);

  selectAllProductFeedbacks$: Observable<ProductFeedback[]>;

  constructor(private store: Store<{ productFeedback: ProductFeedback }>) {
    this.selectAllProductFeedbacks$ = this.store.select(getProductFeedback);
  }
  allProductFeedbacks!: ProductFeedback[];

  ngOnInit(): void {
    this.selectAllProductFeedbacks$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((booklist) => {
        this.allProductFeedbacks = booklist;
        console.log(this.allProductFeedbacks);
      });
  }
}
