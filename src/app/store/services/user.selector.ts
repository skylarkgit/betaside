import { Injectable } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { UserState } from '../reducers/user.reducer';

const getEntityState = createFeatureSelector<AppState>('entityCache');

const getUser = createSelector(
  getEntityState,
  (state: AppState) => state && state.user
);

@Injectable()
export class UserSelector {
  constructor(private store: Store<AppState>) {

  }

  user$ = this.store.select(getUser);
}
