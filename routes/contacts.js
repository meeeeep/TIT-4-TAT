var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contact');
var contacts= require('../models/contact');

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
router.get('/contacts/contactForm', function (req,res) {
    res.render('contacts/contactForm');
});

//Show users contact list// INDEX
router.get('/contacts/contactList', function (req, res) {

    contacts.find({}, function(err, allContacts){
        if(err){
            console.log(err);
        } else {
            res.render('contacts/contactList', {contacts: allContacts});
        }

    });

    // console.log('contacts:', contacts);

    // res.render('contacts/contactList', {contacts: contacts});

});


//POSTING ROUTES

//get data from contactForm and add database/ CREATE
router.post('/contacts/contactList', function (req, res) {
    console.log('req:', req);
    var first = req.body.first;
    var last= req.body.last;
    var met= req.body.meeting;
    var newContact= {first : first, last: last, met: met};
    contacts.create(newContact, function (err, newlyCreated) {
        if(err){
            console.log(err);
        } else {
            res.redirect('contacts/contactList')
        }

    });
    res.redirect('/contacts/contactList');
});

// THIS WILL SHOW THE USERS CONTACT INFO RECORDED //SHOW
router.get('/contacts/:id', function (req, res){
    res.render('contacts/show1contact');
});

module.exports = router;