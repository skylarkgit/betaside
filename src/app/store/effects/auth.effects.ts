import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  // getUserDetails$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.loggedIn),
  //     switchMap(
  //       () => {
  //         console.log('asdasd');
  //         return from(Auth.currentAuthenticatedUser()).pipe(
  //           map(val => ({ username: val.attributes.email })),
  //           catchError(error => of(error))
  //         )
  //       }
  //     )
  //   )
  // );

  constructor(private actions$: Actions) {

  }
}
