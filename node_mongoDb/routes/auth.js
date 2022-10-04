const router = require('express').Router();
const User = require('../models/User');
const  { validateUsername } = require('../utils/validator');

router.post('/register', async (req, res) => {
    
    const validName = validateUsername(req.body.username);

    if(validName){
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        return res.status(200).send(savedUser);
    }
    catch(err) {
        return res.status(400).send(err);
    }

    } 
    // Case for invalid input.
    else {
        if(!validName){
            return res.status(400).send({
                message: 'Invalid username.'
            });
        }
    }


});


module.exports = router;