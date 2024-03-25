import { createAction, props } from '@ngrx/store';
import { ProductFeedback } from './product-feedback.interface';

export const loadProductFeedback = createAction('Loadproductfeedback');

export const addProductFeedback = createAction(
  'Addproductfeedback',
  props<{ productFeedbackInput: ProductFeedback }>()
);
