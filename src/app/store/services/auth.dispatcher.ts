import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { loggedIn } from '../actions/auth.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthDispatcher {
  constructor(private store: Store<AppState>) {
  }

  loggedIn(username: string) {
    this.store.dispatch(loggedIn({ username }));
  }
}
