var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

// Get to signup page
router.get('/signup', function (req,res) {
  res.render('signup');

});

//Get to login page
router.get('/login', function (req,res) {
  res.render('login');
});

//Get to contact form
router.get('/contactForm', function (req,res) {
  res.render('contactForm');
});
module.exports = router;
