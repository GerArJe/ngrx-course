import { createAction, createReducer, on } from '@ngrx/store';

export const initialState = {
  showProductCode: true,
};

export const productReducer = createReducer(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state) => { 
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  })
);
