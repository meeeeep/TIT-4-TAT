var  mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    firstName: String, require: 1,
    lastName: String, require: 1,
    meetingPlace: String,
    phoneNumber: String, require: 1 ,
    email:  String, unique: 1,
    dateMet: String,
    url: String,
    workPlace:  String,
    positionThere: String,
    positionsInterestedIn: String,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('Contact', ContactSchema);