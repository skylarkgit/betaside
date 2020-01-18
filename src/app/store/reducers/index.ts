import { AppAuthState } from './auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export interface AppState {
  auth: AppAuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer
};
