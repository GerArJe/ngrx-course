import { createAction, createReducer, on } from '@ngrx/store';

export const initialState = {
  maskUserName: true,
};

export const userReducer = createReducer(
  initialState,
  on(createAction('[User] MaskUserName'), (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
