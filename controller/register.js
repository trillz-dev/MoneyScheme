const mongoose = require('mongoose')
const User = require('../Models/User')

exports.register = ('/sign-up', (req, res, next) => {
    const newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirm: req.body.confirmpassword
    });

    newUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            // res.send('Data is sent to DB')
            res.render('mainsite/add-bank')
        }
    });
});
