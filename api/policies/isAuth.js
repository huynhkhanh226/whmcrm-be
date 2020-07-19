/**
 * is-super-admin
 *
 * A simple policy that blocks requests from non-super-admins.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
var jwt = require('jsonwebtoken')

module.exports = async function (req, res, proceed) {
  const refeshToken = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["Authorization"];
  //const refeshToken = req.body.token
  console.log(req.body.token);
  if (refeshToken) {
    jwt.verify(refeshToken, sails.config.session.secret, { algorithm: "HS256" }, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          message: 'Unauthorized.',
        });
      }
      req.jwtDecoded = decoded;
      return proceed();
    });
  } else {
    return res.status(403).send({
      message: 'No token provided.',
    });
  }
};
