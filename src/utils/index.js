export const USER_TOKEN_KEY = '@userToken';

/**
 * Get user token from local storage
 */
export const getUserToken = () => {
  try {
    let token = localStorage.getItem(USER_TOKEN_KEY);
    if (token !== null) {
      return token;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};
