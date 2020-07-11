import { createReducer, on, Action } from '@ngrx/store';
import { AuthActions } from '../actions';

export interface AppAuthState {
  username: string;
  isLoggedIn: boolean;
  loading: boolean;
  error: any;
  accessToken: string;
}

const initialState: AppAuthState = {
  username: '',
  isLoggedIn: false,
  error: false,
  loading: false,
  accessToken: null
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loggedInAction, (state, params) => {
    console.log('asdasd', state, params);
    return ({ ...state, loading: false, error: false, username: params.username, accessToken: params.accessToken });
  })
);

export function reducer(state: AppAuthState | undefined, action: Action) {
  return authReducer(state, action);
}
