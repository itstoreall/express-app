const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Connects routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Creates an instance of app
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connects the middleware
app.use(logger('dev')); // Logger
app.use(express.json()); // JSON processing
app.use(express.urlencoded({ extended: false })); // Form data processing
app.use(cookieParser()); // Cookie processing

// Sets static sourses processing
app.use(express.static(path.join(__dirname, 'public')));

// Connects routers to the app
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
