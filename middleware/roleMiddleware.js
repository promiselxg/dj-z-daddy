// middleware/verifyUserRoles.js

const verifyUserRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const rolesArray = [...allowedRoles];
    // check if user is logged in
    if (!req?.user?.role) {
      res.status(401).send("Unauthorized Access");
      return;
    }
    //  check if logged in user has access to view this route
    const result = req.user.role
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) {
      res.status(403).send("Access denied!!!");
      return;
    }
    next();
  };
};

export default verifyUserRoles;
