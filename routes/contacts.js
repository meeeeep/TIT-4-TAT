var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contact');
var Contact = require('../models/contact');

// var contacts = [
//     {first: 'Stephanie', last: 'Cray' }
// ];

//     var ContactSchema = new mongoose.Schema({
//         firstName: String,
//         lastName: String,
//         meetingPlace: String
//
// });
//     var contact = mongoose.model('Contact', ContactSchema);
//
// contacts.create({firstName: 'Andrew', lastName: 'Young', meetingPlace: 'CA'},
// function(err, contact ){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('New Contact');
//         console.log(contact);
//     }
// });


//Get to contact form// NEW
router.get('/contactForm', function (req, res, next) {
    res.render('contacts/contactForm');
});

//Show users contact list// INDEX
router.get('/contactList', function (req, res) {

    Contact.find({}, function(err, allContacts){
        if (err) {
            return next(err);
        } else {
            res.render('contacts/contactList', {contacts: allContacts});
        }
    });

    // console.log('contacts:', contacts);

    // res.render('contacts/contactList', {contacts: contacts});

});


//POSTING ROUTES

//get data from contactForm and add database/ CREATE
router.post('/', function (req, res) {
    console.log('req.body:', req.body);
    var newContact = {
        firstName : req.body.first,
        lastName: req.body.last,
        meetingPlace: req.body.meeting
    };
    Contact.create(newContact, function (err, savedContact) {
        if (err){
            return next(err);
        } else {
            console.log('savedContact:', savedContact);
            res.redirect('contacts/contactList')
        }
    });
});

// THIS WILL SHOW THE USERS CONTACT INFO RECORDED //SHOW
router.get('/:id', function (req, res){
    res.render('contacts/show1contact');
});

module.exports = router;