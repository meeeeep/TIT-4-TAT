var  mongoose = require('mongoose');


var ContactSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    meetingPlace: String,
    phoneNumber: String,
    email: String,
    dateMet: String,
    url: String,
    workPlace: String,
    positionThere: String,
    positionsInterestedIn: String,

 user: mongoose.Schema.Types.ObjectId


});
module.exports = mongoose.model('Contact', ContactSchema);