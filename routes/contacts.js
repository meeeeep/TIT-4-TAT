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
function makeError(res, message, status) {
    res.statusCode = status;
    var error = new Error(message);
    error.status = status;
    return error;
}
function authenticate(req, res, next) {
    if(!req.isAuthenticated()) {
        req.flash('error', 'Please signup or login.');
        res.redirect('/');

        console.log('hello');
    }
    else {
        next();
        console.log('I am here')
    }
}

//Get to contact form// NEW
router.get('/contactForm', authenticate, function (req, res, next) {
    res.render('contacts/contactForm');
});

//Show users contact list// INDEX
router.get('/contactList', authenticate, function (req, res, next) {

    Contact.find({user: currentUser}.sort, function(err, allContacts){
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
router.post('/', authenticate, function (req, res, next) {
    console.log('req.body:', req.body);
    var newContact = {
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        meetingPlace: req.body.meetingPlace,
        phoneNumber: req.body.phoneNumber,
        email:  req.body.email,
        dateMet:req.body.dateMet,
        url: req.body.url,
        workPlace:  req.body.workPlace,
        positionThere: req.body.positionThere,
        positionsInterestedIn: req.body.positionsInterestedIn
    };
    Contact.create(newContact, function (err, savedContact) {
        if (err){
            return next(err);
        } else {
            console.log('savedContact:', savedContact);
            res.redirect('/contacts/contactList')
        }
    });
});

// THIS WILL SHOW THE USERS CONTACT INFO RECORDED //SHOW
router.get('/contactList/:id', authenticate, function (req, res, next){

    Contact.findById(req.params.id, function (err, foundContact) {
        if(err) {
            return next(err);
        } else {
            res.render('contacts/show1contact', {contact : foundContact});
        }
    });
});

//EDIT ROUTE

router.get('/contactList/:id/contactEdit', authenticate, function (req, res,next){
    Contact.findById(req.params.id, function (err, foundContact){
       if(err) {
           return next(err);
       } else {
           res.render('contacts/contactEdit', {contact : foundContact});
       }
    });


});

//UPDATE ROUTE
router.put('/contactList/:id', authenticate, function (req,res,next){
    console.log('req.body:', req.body);//removed .contact because trying to reach body of the form.
    Contact.findByIdAndUpdate(req.params.id, req.body, function(err, updatedContact) {
       if(err) {
           return next(err);
       } else {
           console.log('saved updated contact:', updatedContact);
           res.redirect('/contacts/contactList/' + req.params.id);
       }
    })
});

//DELETE ROUTE
router.delete('/contactList/:id', authenticate, function(req,res,next){
    console.log('Trying to delete contact with id:', req.params.id);// test to see if showing up in terminal
    Contact.findByIdAndRemove(req.params.id, function(err) {

        if(err){
            return next(err);
        } else {
            res.redirect('/contacts/contactList')
        }
    })
});



module.exports = router;