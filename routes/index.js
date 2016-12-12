var express = require('express');
var router = express.Router();



//GET ROUTES

/* Get to home page. */
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


module.exports = router;
