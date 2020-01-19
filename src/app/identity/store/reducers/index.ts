import { ActionReducerMap } from '@ngrx/store';
import * as fromSignin from './signin.reducer';
import { IdentityState } from '../../types';

export const reducers: ActionReducerMap<IdentityState> = {
  identity: fromSignin.reducer
};
