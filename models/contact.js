var  mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    meetingPlace: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    email: { type: String, require: true },
    dateMet: { type: String, require: true },
    url: { type: String, require: true },
    workPlace: { type: String, require: true },
    positionThere: { type: String, require: true },
    positionsInterestedIn: {type: String, require: true },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('Contact', ContactSchema);