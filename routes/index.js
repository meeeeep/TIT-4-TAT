var express = require('express');
var router = express.Router();
var passport = require('passport');



//GET ROUTES

/* Get to home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Get to signup page
router.get('/signup', function (req,res,next) {
  res.render('signup');

});

//POST/SIGNUP
router.post('/signup', function(req, res, next) {
    var signUpStrategy = passport.authenticate('local-signup', {
        successRedirect : '/contacts/contactList',
        failureRedirect : '/signup',
        failureFlash : true
    });

    return signUpStrategy(req, res, next);
});

//Get to login page
router.get('/login', function (req,res) {
  res.render('login');
});

//POST/LOGIN
router.post('/login', function(req, res, next) {
    var loginProperty = passport.authenticate('local-login', {
        successRedirect : '/contacts/contactList',
        failureRedirect : '/login',
        failureFlash : true
    });

    return loginProperty(req, res, next);
});

// GET /logout
router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
