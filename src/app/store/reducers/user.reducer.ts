import {UserActions} from '../actions';
import { on, createReducer, Action } from '@ngrx/store';
export interface UserState {
  email: string;
  name: string;
}

const initialState: UserState = {
  email: null,
  name: null
};

const userReducer = createReducer(
  initialState,
  on(UserActions.setUserAction, (state, action) => ({ ...state, ...action}))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
