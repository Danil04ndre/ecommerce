export const findJwtCookie = () => {
  const cookies = document.cookie;
  const accessToken = cookies.split(";");

  let token = null;
  accessToken.forEach((cookie) => {
    const [name, value] = cookie.split("=");
    if (name.trim() === "jwt") {
      token = value;
    }
  });
  return token;
};
