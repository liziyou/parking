global.BASEDIR = __dirname;
//依赖的模块（处理路由，业务逻辑）
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//实例化 express 并赋值app变量
var app = express();
ejs = require('ejs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());

//bodyParser 改成 urlencoded 可以忽略一些 Node窗口里的警告
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由解析

app.use('/', index);
app.use('/users', users);
app.use('/testLogin',index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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



//引入mongoose建立数据库连接

var mongoose = require('mongoose');
// connect to mongodb
var dbName = 'movie';
var url = 'mongodb://localhost:27017/' + dbName;
var mongoOptions = {
  server: {
    socketOptions: {
      keepAlive: 1
    }
  }
};
mongoose.connect(url, mongoOptions);
mongoose.connection.on('error', function (err) {
  console.log('Mongo Error:' + err);
}).on('open', function () {
  console.log('Connection opened');
});
module.exports = app;
