// middleware to test if authenticated

module.exports = (req, res, next) => {
  console.log(req.session)
  if (req.session.user) {
    next()
  } else {
    return res.status(401).json({
      message: "Authentication failed.",
    });
  }
};
