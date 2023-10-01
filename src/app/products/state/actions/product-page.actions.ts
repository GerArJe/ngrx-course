import { createAction, props } from '@ngrx/store';

import { Product } from '../../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProductCode = createAction(
  '[Product Page] Set current product',
  props<{ currentProductId: number | null }>()
);
export const clearCurrentProductCode = createAction(
  '[Product Page] Clear current product'
);
export const InitializeCurrentProductCode = createAction(
  '[Product Page] Initialize current product'
);
export const loadProducts = createAction('[Product Page] Load');

export const updateProduct = createAction(
  '[Product Page] Update Product',
  props<{ product: Product }>()
);

export const createProduct = createAction(
  '[Product Page] Create Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product Page] Delete Product',
  props<{ productId: number }>()
);
