import { createAction, props } from '@ngrx/store';

export const loggedIn = createAction('[Auth] LoggedIn', props<{username: string}>());
