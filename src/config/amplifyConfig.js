

const { Amplify } = require('@aws-amplify/core');


exports.initAmplify = (POOL) =>  {
  const poolData = {
    // REQUIRED - Amazon Cognito Region
    
    region: process.env.REGION_AWS,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: POOL === 'User' ?  process.env.USER_POOL_COGNITO : process.env.USER_POOL_COGNITO_COMPANY,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: POOL === 'User' ? process.env.USER_POOL_CLIENT_COGNITO : process.env.USER_POOL_CLIENT_COGNITO_COMPANY,
  };
  Amplify.configure({
    Auth: poolData,
  });
  
};