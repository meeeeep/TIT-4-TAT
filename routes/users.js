var express = require('express');
var router = express.Router();

// var contacts = [
//     {first: 'Stephanie', last: 'Cray' }
// ];
//
//
// //Get to contact form
// router.get('/contacts/contactForm', function (req,res) {
//     res.render('contactForm');
// });
//
// //Get to users contact list
// router.get('/contacts/contactList', function (req, res) {
//
//     console.log('contacts:', contacts);
//     res.render('contactList', {contacts: contacts});
//
// });
//
//
// //POSTING ROUTES
//
// //get data from contactForm and add to array and redirect  to contactList
// router.post('/contacts/contactList', function (req, res) {
//     console.log('req:', req);
//     var first = req.body.first;
//     var last= req.body.last;
//     var newContact= {first : first, last: last};
//     contacts.push(newContact);
//     res.redirect('contactList');
// });

module.exports = router;
