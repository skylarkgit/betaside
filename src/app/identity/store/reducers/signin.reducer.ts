import { createReducer, on, Action } from '@ngrx/store';
import { SignInAction } from '../actions';
import { AppAuthState, AuthStatus } from '../../types';

const initialState: AppAuthState = {
  user: null,
  loading: false,
  error: null,
  status: AuthStatus.LOGGED_OUT
};

const signinReducer = createReducer(
  initialState,
  on(SignInAction.verifyIdentity, (state: AppAuthState) => ({ ...state, state: AuthStatus.VERIFYING })),
  on(SignInAction.loginSuccess, (state: AppAuthState, props) => ({ ...state, status: AuthStatus.LOGGED_IN, user: props.user }))
);

export function reducer(state: AppAuthState | undefined, action: Action) {
  return signinReducer(state, action);
}
