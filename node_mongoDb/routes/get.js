const express = require('express');

const router = express.Router();


// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});


module.exports = router;