import { createAction, props } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';

export const setUserAction = createAction('[User] Set', props<{user: UserState}>());
