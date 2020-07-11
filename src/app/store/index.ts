export * from './actions';
export * from './effects';
export * from './reducers';

import { AuthDispatcher, UserSelector } from './services';

export const services = [AuthDispatcher, UserSelector];
