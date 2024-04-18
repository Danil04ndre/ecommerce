import { findJwtCookie } from "./findJwtCookie";

export const tokenData = () => {
  const token = findJwtCookie();
  if (token) {
    const decodedToken = atob(token.split(".")[1]);
    const userData = JSON.parse(decodedToken);
    userData.token = token;
    userData.isAuth = true;
    return userData;
  }
};
