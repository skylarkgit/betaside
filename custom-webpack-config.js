const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        AWS_CLIENT_ID: JSON.stringify(process.env.BTSD_AWS_CLIENT_ID),
        AWS_CLIENT_SECRET: JSON.stringify(process.env.BTSD_AWS_CLIENT_SECRET),
        SIGNIN_REDIRECT_URI: JSON.stringify(process.env.BTSD_SIGNIN_REDIRECT_URI),
        SIGNOUT_REDIRECT_URI: JSON.stringify(process.env.BTSD_SIGNOUT_REDIRECT_URI),
        SIGNIN_URI: JSON.stringify(process.env.BTSD_SIGNIN_URI),
        AWS_COGNITO_REGION: JSON.stringify(process.env.BTSD_AWS_COGNITO_REGION),
        AWS_USER_POOLS_ID: JSON.stringify(process.env.BTSD_AWS_USER_POOLS_ID),
        AWS_COGNITO_IDENTITY_POOL_ID: JSON.stringify(process.env.BTSD_COGNITO_IDENTITY_POOL_ID),
        AWS_REGION: JSON.stringify(process.env.BTSD_AWS_REGION)
      }
    })
  ]
};
