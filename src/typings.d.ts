declare var $ENV: Env;

interface Env {
  AWS_CLIENT_ID: string;
  AWS_CLIENT_SECRET: string;
  SIGNIN_REDIRECT_URI: string;
  SIGNOUT_REDIRECT_URI: string;
  SIGNIN_URI: string;
}
