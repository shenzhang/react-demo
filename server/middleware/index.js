const morgan = require('morgan')
const sleep = require('sleep')

module.exports = (app) => {
  // Express only serves static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
  }

  app.use(morgan('combined'));

  app.use('/api/*', (req, res, next) => {
    sleep.sleep(1);
    res.header('Content-Type', 'application/json; charset=utf-8');

    next();
  });
}