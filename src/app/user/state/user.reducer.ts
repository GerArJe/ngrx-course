import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State {
  users: UserState;
}

export interface UserState {
  maskUserName: boolean;
}

const initialState: UserState = {
  maskUserName: true,
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  (state) => state.maskUserName
);

export const userReducer = createReducer(
  initialState,
  on(createAction('[User] MaskUserName'), (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
