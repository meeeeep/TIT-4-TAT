var  mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
// var contact =  require('/models/contact');

var UserSchema = new mongoose.Schema({
    local : {
        emaiL:     String,
        password:  String
    },

});




UserSchema.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

//bcrypt stuff




module.exports = mongoose.model('User', UserSchema);


// var user = require('./user');