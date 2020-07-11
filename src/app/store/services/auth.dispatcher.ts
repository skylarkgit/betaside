import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { loggedInAction } from '../actions/auth.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthDispatcher {
  constructor(private store: Store<AppState>) {
  }

  loggedIn(username: string, accessToken: string) {
    console.log('dispatching', username, accessToken);
    localStorage.setItem('ACCESS_TOKEN', accessToken);
    this.store.dispatch(loggedInAction({ username, accessToken }));
  }
}
