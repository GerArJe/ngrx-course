import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as AppState from '../../state/app.state';
import * as UserActions from './user.actions';
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
  on(UserActions.maskUserName, (state) => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);
