var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local');
passportLocalMongoose = require('passport-local-mongoose')


//Routes
var index = require('./routes/index');
var users = require('./routes/users');
var contacts = require('./routes/contacts');


var app = express();
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/project-2');
}
mongoose.connection.on('error', function(err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);
mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('layout', 'layout');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressLayouts);
app.use(methodOverride('_method'));
app.use(require('express-session')({
    secret: 'I love cats too',
    resave: true,
    saveUninitialized: true

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

// This middleware will allow us to use the currentUser in our views and routes.
app.use(function (req, res, next) {
    global.currentUser = req.user;
    next();
});


//Routes
app.use('/', index);
app.use('/users', users);
app.use('/contacts', contacts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

console.log('Running in %s mode', app.get('env'));




module.exports = app;
