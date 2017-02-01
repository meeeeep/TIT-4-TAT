var  mongoose = require('mongoose');


var ContactSchema = new mongoose.Schema({

    contact: {
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

        user: {type: mongoose.Schema.Types.ObjectId}
}


});
module.exports = mongoose.model('Contact', ContactSchema);