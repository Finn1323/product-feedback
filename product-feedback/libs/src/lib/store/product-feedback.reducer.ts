import { createReducer, on } from '@ngrx/store';
import { ProductFeedbackState } from './product-feedback.state';
import {
  addProductFeedback,
  loadProductFeedback,
} from './product-feedback.actions';
// import { ProductFeedback } from './product-feedback.interface';

export const ProductFeedbackReducer = createReducer(
  ProductFeedbackState,
  on(loadProductFeedback, (state) => {
    return {
      ...state,
    };
  }),
  on(addProductFeedback, (state, action) => {
    const productFeedback = { ...action.productFeedbackInput };
    productFeedback.id++;
    return {
      ...state,
      productFeedbackList: [...state.productFeedbackList, productFeedback],
    };
  })
);
