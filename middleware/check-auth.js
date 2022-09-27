const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        req.userData = decoded
        next() // success
      }
    } catch (e) {
      return res.status(401).json({
        message: 'Auth failed'
      })
    }
}
