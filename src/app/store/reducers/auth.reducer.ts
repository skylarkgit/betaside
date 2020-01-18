import { createReducer, on, Action } from '@ngrx/store';
import { AuthActions } from '../actions';

export interface AppAuthState {
  username: string;
  isLoggedIn: boolean;
  loading: boolean;
  error: any;
}

const initialState: AppAuthState = {
  username: '',
  isLoggedIn: false,
  error: false,
  loading: false
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loggedIn, state => {
    console.log('asdasd');
    return ({ ...state, loading: false, error: false })}),
);

export function reducer(state: AppAuthState | undefined, action: Action) {
  return authReducer(state, action);
}
