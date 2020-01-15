const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        AWS_CLIENT_ID: JSON.stringify(process.env.AWS_CLIENT_ID),
        AWS_CLIENT_SECRET: JSON.stringify(process.env.AWS_CLIENT_SECRET),
        SIGNIN_REDIRECT_URI: JSON.stringify(process.env.SIGNIN_REDIRECT_URI),
        SIGNOUT_REDIRECT_URI: JSON.stringify(process.env.SIGNOUT_REDIRECT_URI),
        SIGNIN_URI: JSON.stringify(process.env.SIGNIN_URI),
      }
    })
  ]
};
