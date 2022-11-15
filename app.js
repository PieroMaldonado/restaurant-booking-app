var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cookieSession = require('cookie-session');
// const bcrypt = require('bcrypt');

const flash = require('connect-flash');
const session = require('express-session');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');
var librosRouter = require('./routes/libros');
var mesasRouter = require('./routes/mesas');
var clientesRouter = require('./routes/clientes');
var productosRouter = require('./routes/productos');
var categoriasRouter = require('./routes/categorias');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extends: false}));
app.use(flash());
// APPLY COOKIE SESSION MIDDLEWARE
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge:  3600 * 1000 // 1hr
}));
app.use(session({
  secret: 'mykey',
  resave: false,
  saveUninitialized: false
}));

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/users', usersRouter);
app.use('/libros', librosRouter);
app.use('/mesas', mesasRouter);
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);

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
