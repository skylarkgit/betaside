export interface User {
  name: string;
  email: string;
}

export interface IdentityState {
  identity: AppAuthState;
}

export enum AuthStatus {
  LOGGED_IN = 'LOGGED_IN',
  LOGGED_OUT = 'LOGGED_OUT',
  EXPIRED = 'EXPIRED',
  VERIFYING = 'VERIFYING'
}

export interface AppAuthState {
  user: User;
  loading: boolean;
  error: any;
  status: AuthStatus;
}

