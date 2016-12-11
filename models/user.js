var  mongoose = require('mongoose');
//var bcrypt = require('brypt-node.js');
var contact =  require('./contact');

var User = new mongoose.Schema({
    local : {
        email     :String,
        password  :String
    },
    firstName: { type: String },
    lastName:  { type: String },
    contacts : [contact.schema]
});

module.exports = mongoose.model('User', User);