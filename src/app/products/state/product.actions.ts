import { createAction, props } from '@ngrx/store';

import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProductCode = createAction(
  '[Product] Set current product',
  props<{ currentProductId: number | null }>()
);
export const clearCurrentProductCode = createAction(
  '[Product] Clear current product'
);
export const InitializeCurrentProductCode = createAction(
  '[Product] Initialize current product'
);
export const loadProducts = createAction('[Product] Load');
export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Fail',
  props<{ error: string }>()
);
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  '[Product] Update Product Fail',
  props<{ error: string }>()
);
