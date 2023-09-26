import { createAction, props } from '@ngrx/store';

import { Product } from '../product';

export const toggleProductCode = createAction('[Product] Toggle Product Code');
export const setCurrentProductCode = createAction(
  '[Product] Set current product',
  props<{ product: Product }>()
);
export const clearCurrentProductCode = createAction(
  '[Product] Clear current product'
);
export const intilializeCurrentProductCode = createAction(
  '[Product] Intilialize current product'
);
