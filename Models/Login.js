const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: String,
    password: String
});

const Login = new mongoose.model('logins', LoginSchema)

// module.exports = User = mongoose.model('user', LoginSchema)