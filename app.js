const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv')

const app = express();

app.set('view engine', 'ejs');
app.set('views');
app.use(express.static('public'));


//Laod Config
dotenv.config({ path: './config/config.env'})

connectDB();

const mainsiteRoutes = require('./routes/mainsite');
const dashboardRoutes = require('./routes/dashboard');
const errorController = require('./controller/error')



app.use(mainsiteRoutes);
app.use('/dashboard', dashboardRoutes);
// app.use(errorController.get404);


const PORT = process.env.PORT || 5000

app.listen(PORT);
