const usersRouter = require('express').Router();

// @route       POST /api/users/register
// @descr       Registers a new user into the database.
// @access      Public
usersRouter.post('/register', async (req, res, next) => {
  res.send({ msg: 'This route registers a new user into the database.' });
});

// @route       POST /api/users/login
// @descr       Logs in a registered user.
// @access      Public
usersRouter.post('/login', async (req, res, next) => {
  res.send({ msg: 'This route logs in a registered user.' });
});

// @route       GET /api/users/dashboard
// @descr       Retrieve's a user's info.
// @access      Private
usersRouter.get('/dashboard', async (req, res, next) => {
  res.send({ msg: `This route retrieves a user's profile info.` });
});

module.exports = usersRouter;
