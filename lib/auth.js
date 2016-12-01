const bcrypt    = require('bcryptjs');
const userModel = require('../models/user');

function logIn(req, res, next) {
  const userPayload = req.body.user;
  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    if (dbUser) {
      const matches = bcrypt.compareSync(userPayload.password, dbUser.password);
      if (matches) {
        req.session.userId = dbUser._id;
        res.user = dbUser;
        next();
      }
    } else {
      console.log('!!WRONG!!')
      res.redirect('/');
    }
  })
  .catch(err => next(err))
}

function authenticate(req, res, next) {
  if (req.session.userId) {
    userModel.getUserById(req.session.userId).then((dbUser) => {
      res.user = dbUser;
      next();
    }).catch(() => {
      res.redirect('/login');
    });
  } else {
    res.redirect('/');
  }
}

module.exports = {
  logIn,
  authenticate
};
