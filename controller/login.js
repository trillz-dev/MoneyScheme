const mongoose = require('mongoose')
const Login = require('../Models/Login')
// const User = require('../Models/User')


exports.login = ('/login', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, (err, foundUser) => {
        if(err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    // res.send('User Found')
                    // console.log('User found')
                    res.render('mainsite/add-bank')
                }
            }
        }
    })
})