export const environment = {
  production: true,
  auth: {
    uri: $ENV.SIGNIN_URI,
    redirectUri: $ENV.SIGNIN_REDIRECT_URI,
    clientId: $ENV.AWS_CLIENT_ID,
    signoutUri: $ENV.SIGNOUT_REDIRECT_URI
  },
  aws: {
    region: $ENV.AWS_REGION,
    cognitoRegion: $ENV.AWS_COGNITO_REGION,
    cognitoIdentityPoolId: $ENV.AWS_COGNITO_IDENTITY_POOL_ID,
    userPoolsId: $ENV.AWS_USER_POOLS_ID
  }
};
