const appsRouter = require('express').Router();

// @route   GET /api/applications
// @descr   This route retrieves a user's job applications in the database.
// @access  Private
appsRouter.get('/', async (req, res, next) => {
  res.send({ msg: `This route retrieves a user's job applications.` });
});

// @route   POST /api/applications
// @descr   This route creates a new job application in the database.
// @access  Private
appsRouter.post('/', async (req, res, next) => {
  res.send({
    msg: 'This route creates a new job application in the database.',
  });
});

// @route   DELETE /api/applications/:job_app_ID
// @descr   This route deletes a job application in the database.
// @access  Private
appsRouter.delete('/:job_app_ID', async (req, res, next) => {
  const { job_app_ID } = req.params;
  res.send({
    msg: `This route deletes job application with id of ${job_app_ID}.`,
  });
});

// @route   PATCH /api/applications/:job_app_ID
// @descr   This route updates a job application in the database.
// @access  Private
appsRouter.patch('/:job_app_ID', async (req, res, next) => {
  const { job_app_ID } = req.params;
  res.send({
    msg: `This route updates job application with id of ${job_app_ID}.`,
  });
});

module.exports = appsRouter;
