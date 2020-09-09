const mongoose = require('mongoose')
const User = require('../Models/User')

const register = ('/sign-up', (req, res) => {
    const newUser = User({
        name: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        confirm: req.body.confirmpassword
    });

    newUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.render('dashboard/dashboard')
        }
    });
});

module.exports = register