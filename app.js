var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const passport = require('passport');

var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Configuracion de la session para almacenarla en BBDD usando Sequelize.
var sequelize = require("./models");
var sessionStore = new SequelizeStore({
  db: sequelize,
  table: "Session",
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds. (15 minutes)
  expiration: 4 * 60 * 60 * 1000  // The maximum age (in milliseconds) of a valid session. (4 hours)
});
app.use(session({
  secret: "TFG Hugo Pascual",
  store: sessionStore,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize( {
  userProperty: 'loginUser' // defaults to 'user' if omitted
}));
app.use(passport.session());


//Empty route
app.get('/', function(req, res, next) {
  res.render('index', { title: 'TFG_Hugo_Pascual_Back' });
});

//Routes mounted at '/api'
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;