module.exports = (req, res, next) => {
  if (req.session && req.session.userid) {
      next();
  } else {
      res.status(401).json({ message: 'You shall not pass!' });
  }
}
