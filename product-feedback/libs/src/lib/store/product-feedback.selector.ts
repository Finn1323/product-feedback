import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ProductFeedbacks,
  ProductFeedback,
} from './product-feedback.interface';

const getProductFeedbackState =
  createFeatureSelector<ProductFeedbacks>('productfeedback');

export const getProductFeedback = createSelector(
  getProductFeedbackState,
  (state) => {
    return state.productFeedbackList;
  }
);

export const getProductFeedbackById = (pfId: number) =>
  createSelector(getProductFeedbackState, (state) => {
    return state.productFeedbackList.find(
      (productFeedback: ProductFeedback) => productFeedback.id === pfId
    ) as ProductFeedback;
  });
