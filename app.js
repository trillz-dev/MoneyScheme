const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));



//Laod Config
dotenv.config({ path: './config/config.env'})

// Connect Mongoose
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//         })
//         console.log(`MongoDB Connected: ${conn.connection.host}`)
//     } catch (err) {
//         console.error(err)
//         process.exit(1)
//     }
// }
connectDB();


// Routes
const mainsiteRoutes = require('./routes/mainsite');
const dashboardRoutes = require('./routes/dashboard');
const registerRoutes = require('./controller/register');
const errorController = require('./controller/error');


app.use(mainsiteRoutes);
app.use('/dashboard', dashboardRoutes);
app.use(registerRoutes);
// app.use(errorController.get404);





const PORT = process.env.PORT || 5000

app.listen(PORT);
