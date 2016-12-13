var  mongoose = require('mongoose');


var ContactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    meetingPlace: String
    // phoneNumber: String, required: true,
    // email:  String, unique: true,
    // dateMet: String,
    // url: String,
    // workPlace:  String,
    // positionThere: String,
    // positionsInterestedIn: String,
    // user : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});
module.exports = mongoose.model('Contact', ContactSchema);