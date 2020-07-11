import { createAction, props } from '@ngrx/store';

export const loggedInAction = createAction('[Auth] LoggedIn', props<{username: string, accessToken: string}>());
