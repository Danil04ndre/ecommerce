import jwt from "jsonwebtoken";

export const verifyAdminToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const tokenCookie = req.cookies.jwt;

    const tokenAuthorization = authorization.split(" ")[1];
    if (tokenCookie === tokenAuthorization) {
      const tokenValid = jwt.verify(tokenCookie, process.env.JWT_SECRET_KEY);
      if (tokenValid.admin) {
        next();
      }else{
        res.status(401).json({ messageAuthorized: "Rol no autorizado." });
      }
    } else {
      res.status(401).json({ messageAuthorized: "Token incorrecto o ha sido modificado. Por favor, inicie sesion nuevamente." });
    }
  } catch (error) {
    res.status(401).json({ messageAuthorized: "Token expirado o sesion no iniciada. Por favor, inicie sesion nuevamente." });
  }
};
