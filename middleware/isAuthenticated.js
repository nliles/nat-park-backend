// middleware to test if authenticated

module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    return res.status(401).json({
      message: "Authentication failed.",
    });
  }
};
