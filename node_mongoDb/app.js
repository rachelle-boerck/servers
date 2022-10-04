const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

// Import Routes
const authRoute = require('./routes/auth');

const { baseUrl, user, password , database } = require('./secrets/db_config');

const PORT = 3000;

// Connect to db
mongoose.connect(baseUrl + user + ':' + password + database, () => {
    console.log('Connected to Database');
});


// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes Middleware
app.use('/api/user', authRoute);



// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});



// Setup Port
app.listen(PORT, () => console.log(`Server listen on ${PORT}`));