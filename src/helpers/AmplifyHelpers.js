import { Auth } from 'aws-amplify';
import amplifyConfig from '../config/amplifyConfig';

export const signInCognito = async (email, password) => {
  try {
    amplifyConfig.initAmplify("User");
    const data = await Auth.signIn(email, password);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const signOutCognito = async () => {
  try {
    amplifyConfig.initAmplify("User");
    const data = await Auth.signOut();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const userIsLogged = async () => {
  amplifyConfig.initAmplify("User");
  try {
    await Auth.currentAuthenticatedUser();
    const currentSession = await Auth.currentSession();
    return currentSession;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};