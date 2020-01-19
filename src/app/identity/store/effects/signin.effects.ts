import { createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { SignInAction } from '../actions';

// const onVerification$ = createEffect(() => this.actions$.pipe(
//   ofType(SignInAction.verifyIdentity),
//   switchMap(() => )
//   )
// );
