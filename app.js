const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views');

const mainsiteRoutes = require('./routes/mainsite');
const dashboardRoutes = require('./routes/dashboard');
const errorController = require('./controller/error')


app.use(express.static('public'));

app.use(mainsiteRoutes);
app.use('/dashboard', dashboardRoutes);
// app.use(errorController.get404);

app.listen(3000);
