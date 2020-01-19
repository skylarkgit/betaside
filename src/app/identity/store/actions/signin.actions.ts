import { createAction, props } from '@ngrx/store';
import { User } from '../../types';

export const verifyIdentity = createAction('[Login] Verify');

export const loginSuccess = createAction('[Login] Success', props<{user: User}>());
