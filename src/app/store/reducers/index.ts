import { AppAuthState } from './auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromUser from './user.reducer';
import { UserState } from './user.reducer';

export interface AppState {
  auth: AppAuthState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  user: fromUser.reducer
};
