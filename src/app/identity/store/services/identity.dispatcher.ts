import { Store } from '@ngrx/store';
import { SignInAction } from '../actions';
import { IdentityState } from '../../types';
import { Injectable } from '@angular/core';

@Injectable()
export class IdentityDispatcher {
  constructor(private store: Store<IdentityState>) {
  }

  verifyLogin() {
    this.store.dispatch(SignInAction.verifyIdentity());
  }

}
