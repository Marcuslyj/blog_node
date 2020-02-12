var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 初始化app
var app = express();

// 模板引擎设置
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 写日志
app.use(logger('dev'));
// 获取post的json数据
app.use(express.json());
// 其他数据格式
app.use(express.urlencoded({ extended: false }));
// 解析cookie，可通过req.cookies访问
app.use(cookieParser());
// 静态文件
// app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// 处理404
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
