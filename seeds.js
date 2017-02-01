var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var bcrypt   = require('bcrypt-nodejs');
var Contact = require('./models/contact');
var User = require('./models/user');

mongoose.connect('mongodb://localhost/project-2');


// our script will not exit until we have disconnected from the db.
function quit() {
    mongoose.disconnect();
    console.log('\nQuitting!');
}

// a simple error handler
function handleError(err) {
    console.error('ERROR:', err);
    quit();
    return err;
}
