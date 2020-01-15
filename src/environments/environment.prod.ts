export const environment = {
  production: true,
  auth: {
    uri: $ENV.SIGNIN_URI,
    redirectUri: $ENV.SIGNIN_REDIRECT_URI,
    clientId: $ENV.AWS_CLIENT_ID,
    signoutUri: $ENV.SIGNOUT_REDIRECT_URI
  }
};
