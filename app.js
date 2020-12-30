const path = require('path');
const express = require('express');
const ejs = require('ejs');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views');
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.urlencoded({
    extended: true
}));



//Laod Config
dotenv.config({ path: './config/config.env'})

// Connect Mongoose
// connectDB();


// Routes
const mainsiteRoutes = require('./routes/mainsite');
const dashboardRoutes = require('./routes/dashboard');
// const registerRoutes = require('./routes/register');
// const loginRoutes = require('./routes/login');
// const errorController = require('./controller/error');


app.use(mainsiteRoutes);
app.use(dashboardRoutes);
// app.use(registerRoutes);
// app.use(loginRoutes);
// app.use(errorController.get404);





const PORT = process.env.PORT || 5000

app.listen(PORT);
