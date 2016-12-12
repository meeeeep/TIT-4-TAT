var  mongoose = require('mongoose');
//var bcrypt = require('brypt');
var contact =  require('./contact');

var User = new mongoose.Schema({
    local : {
        emaiL:     String, required: 1, unique: 1,
        password:  String, required: 1
    },
    firstName: { type: String },
    lastName:  { type: String },
    contacts : [contact.schema]
});


//bcrypt stuff




module.exports = mongoose.model('User', User);


var user = require('./user');