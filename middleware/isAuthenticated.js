// middleware to test if authenticated

module.exports = (req, res, next) => {
  if (req.signedCookies) {
    next();
  } else {
    return res.status(401).json({
      message: "Authentication failed.",
    });
  }
};
