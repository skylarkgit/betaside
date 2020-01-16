import { environment } from './environments/environment';

const awsConfig = {
  aws_project_region: environment.aws.region,
  aws_cognito_identity_pool_id: environment.aws.cognitoIdentityPoolId,
  aws_cognito_region: environment.aws.cognitoRegion,
  aws_user_pools_id: environment.aws.userPoolsId,
  aws_user_pools_web_client_id: environment.auth.clientId,
  oauth: {
      domain: environment.auth.uri,
      scope: [
          'phone',
          'email',
          'openid',
          'profile',
          'aws.cognito.signin.user.admin'
      ],
      redirectSignIn: environment.auth.redirectUri,
      redirectSignOut: environment.auth.signoutUri,
      responseType: 'code'
  },
  federationTarget: 'COGNITO_USER_POOLS'
}

export default awsConfig;
