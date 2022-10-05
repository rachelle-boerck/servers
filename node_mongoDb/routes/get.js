const express = require('express');

const router = express.Router();

const app = express();

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


module.exports = router;